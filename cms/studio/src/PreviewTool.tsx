import {useCallback, useEffect, useRef, useState} from 'react'
import {useClient} from 'sanity'
import {Box, Button, Card, Flex, Spinner, Text} from '@sanity/ui'
import {renderPreviewHtml} from './renderPreview'

const GROQ = `{
  "site": *[_type == "siteSettings"][0],
  "services": *[_type == "service"] | order(order asc){title, description, showInContactForm},
  "serviceAreas": *[_type == "serviceArea"] | order(order asc){name, region},
  "testimonials": *[_type == "testimonial"] | order(order asc){quote, attribution}
}`

export function PreviewTool() {
  const client = useClient({apiVersion: '2024-01-01'})

  const [html, setHtml] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const didInit = useRef(false)

  const load = useCallback(async () => {
    try {
      // Fetch with the draft perspective (shows unpublished edits merged over
      // published). The name changed across client versions, so try both.
      let raw: any
      try {
        raw = await client.withConfig({perspective: 'drafts' as any}).fetch(GROQ)
      } catch {
        raw = await client.withConfig({perspective: 'previewDrafts' as any}).fetch(GROQ)
      }
      setHtml(renderPreviewHtml(raw, client))
      setError(null)
    } catch (e: any) {
      setError(e?.message || String(e))
    } finally {
      setLoading(false)
    }
  }, [client])

  useEffect(() => {
    if (didInit.current) return
    didInit.current = true
    load()
    const id = setInterval(load, 5000) // keep the preview roughly live
    return () => clearInterval(id)
  }, [load])

  return (
    <Flex direction="column" style={{position: 'absolute', inset: 0}}>
      <Card padding={3} borderBottom tone="transparent">
        <Flex align="center" gap={3}>
          <Text size={1} weight="semibold">
            Draft preview
          </Text>
          <Text size={1} muted>
            {loading ? 'Loading…' : 'Shows unpublished edits. Updates every few seconds.'}
          </Text>
          <Box flex={1} />
          {loading && <Spinner muted />}
          <Button text="Refresh" mode="ghost" fontSize={1} onClick={load} />
        </Flex>
      </Card>
      <Box flex={1} style={{position: 'relative'}}>
        {error ? (
          <Card padding={4} tone="critical">
            <Text size={1}>Preview error: {error}</Text>
          </Card>
        ) : (
          <iframe
            title="Site preview"
            srcDoc={html}
            // allow-scripts so the carousel/menu run; no allow-forms so the
            // contact form can't actually submit from the preview.
            sandbox="allow-scripts allow-same-origin"
            style={{border: 'none', width: '100%', height: '100%', display: 'block', background: '#fff'}}
          />
        )}
      </Box>
    </Flex>
  )
}
