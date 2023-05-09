export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

import { renderToNodeStream } from '@vue/server-renderer'
import { escapeInject } from 'vite-plugin-ssr/server'
import { createApp } from './app'
import logoUrl from './logo.svg'
import type { PageContext } from './types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const app = createApp(Page, pageProps, pageContext)
  const stream = renderToNodeStream(app)

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <script>
          (function () {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
            if (setting === 'dark' || (prefersDark && setting !== 'light'))
              document.documentElement.classList.toggle('dark', true)
          })()
        </script>
      </head>
      <body>
        <div id="app">${stream}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true
    }
  }
}
