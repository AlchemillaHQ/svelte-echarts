import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: undefined,
      precompress: false,
      strict: false,
    }),
    alias: {
      '@alchemilla/svelte-echarts': './src/lib/svelte-echarts',
      '@alchemilla/svelte-echarts/*': './src/lib/svelte-echarts/*',
    },
  },
}

export default config
