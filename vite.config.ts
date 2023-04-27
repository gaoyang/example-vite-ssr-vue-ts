import vue from '@vitejs/plugin-vue'
import { UserConfig } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ssr from 'vite-plugin-ssr/plugin'
import UnoCSS from 'unocss/vite'

const config: UserConfig = {
  plugins: [
    vue(),
    ssr(),
    UnoCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver({ ssr: true })]
    }),
    Components({
      resolvers: [ElementPlusResolver({ ssr: true })]
    })
  ]
}

export default config
