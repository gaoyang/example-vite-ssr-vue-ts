export { render }

import { createApp } from './app'
import type { PageContextClient } from './types'

let app: ReturnType<typeof createApp>
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  if (!app) {
    app = createApp(Page, pageProps, pageContext)
    app.mount('#app')
  } else {
    app.changePage(pageContext)
  }
}

export const clientRouting = true
export const prefetchStaticAssets = { when: 'VIEWPORT' }
