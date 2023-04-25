import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { UserConfig } from 'vite'
import ssr from 'vite-plugin-ssr/plugin'

const config: UserConfig = {
  plugins: [
    vue(),
    ssr(),
    AutoImport({
      resolvers: [ElementPlusResolver({ ssr: true })]
    }),
    Components({
      resolvers: [ElementPlusResolver({ ssr: true })]
    })
  ]
}

export default config
