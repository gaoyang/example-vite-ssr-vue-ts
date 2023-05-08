import { UserConfig } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import ssr from 'vite-plugin-ssr/plugin'
import UnoCSS from 'unocss/vite'

const config: UserConfig = {
  plugins: [
    vue(),
    ssr(),
    UnoCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver({ ssr: true }), IconsResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver({ ssr: true }), IconsResolver()]
    }),
    Icons({
      autoInstall: true
    })
  ]
}

export default config
