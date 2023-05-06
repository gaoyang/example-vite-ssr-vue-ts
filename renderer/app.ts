import { createSSRApp, defineComponent, h } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import type { Component, PageContext, PageProps } from './types'
import { ClientOnly } from '../components/ClientOnly'
import ElementPlus from 'element-plus'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

useDark()

export { createApp }

function createApp(Page: Component, pageProps: PageProps | undefined, pageContext: PageContext) {
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          }
        }
      )
    }
  })

  const app = createSSRApp(PageWithLayout)

  // Make pageContext available from any Vue component
  setPageContext(app, pageContext)
  app.use(ElementPlus)
  app.component('ClientOnly', ClientOnly)

  return app
}
