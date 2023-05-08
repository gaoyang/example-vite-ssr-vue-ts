import { PageContextBuiltIn } from 'vite-plugin-ssr/types'
import os from 'os'

export { onBeforeRender }

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const pageProps = {
    userInfo: os.userInfo(),
    osInfo: {
      hostname: os.hostname(),
      cpuCount: os.cpus().length,
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      osType: os.type(),
      osPlatform: os.platform(),
      osRelease: os.release()
    },
    nodeInfo: {
      version: process.version,
      platform: process.platform,
      arch: process.arch
    }
  }

  return {
    pageContext: {
      pageProps
    }
  }
}
