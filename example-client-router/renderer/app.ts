import { createSSRApp, defineComponent, h, markRaw, reactive } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import type { Component, PageContext, PageProps } from './types'
import ElementPlus from 'element-plus'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

useDark()

export { createApp }

function createApp(Page: Component, pageProps: PageProps | undefined, pageContext: PageContext) {
  let rootComponent: Component

  const PageWithLayout = defineComponent({
    data: () => ({
      Page: markRaw(Page),
      pageProps: markRaw(pageProps || {})
    }),
    created() {
      rootComponent = this
    },
    render() {
      return h(
        PageShell,
        {},
        {
          default: () => {
            return h(this.Page, this.pageProps)
          }
        }
      )
    }
  })

  const app = createSSRApp(PageWithLayout)

  // We use `app.changePage()` to do Client Routing, see `_default.page.client.js`
  objectAssign(app, {
    changePage: (pageContext: PageContext) => {
      Object.assign(pageContextReactive, pageContext)
      rootComponent.Page = markRaw(pageContext.Page)
      rootComponent.pageProps = markRaw(pageContext.pageProps || {})
    }
  })

  // When doing Client Routing, we mutate pageContext (see usage of `app.changePage()` in `_default.page.client.js`).
  // We therefore use a reactive pageContext.
  const pageContextReactive = reactive(pageContext)

  // Make pageContext available from any Vue component
  setPageContext(app, pageContextReactive)
  app.use(ElementPlus)

  return app
}

// Same as `Object.assign()` but with type inference
function objectAssign<Obj extends object, ObjAddendum>(
  obj: Obj,
  objAddendum: ObjAddendum
): asserts obj is Obj & ObjAddendum {
  Object.assign(obj, objAddendum)
}
