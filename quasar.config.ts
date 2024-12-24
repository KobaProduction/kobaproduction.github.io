import { defineConfig } from '#q-app/wrappers'
import { fileURLToPath, URL } from 'node:url'

const USE_DEV_HTTPS: boolean = process.env.USE_DEV_HTTPS === 'TRUE';

const devServer = USE_DEV_HTTPS ? {
  host: "localhost.dev",
  port: 443,
  https: {
    key: "./certificates/localhost.dev.key",
    cert: "./certificates/localhost.dev.crt",
  }
} : {
  port: 3000,
}

export default defineConfig(() => {
  return {
    // boot: ['axios', 'telegramHapticFeedback'],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v7',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      typescript: {
        strict: true,
        vueShim: true,
        // extendTsConfig (tsConfig) {}
      },

      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },

      vueRouterMode: 'hash',
      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            vueTsc: true,
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    devServer: {...devServer, open: false},

    framework: {
      config: {},
      plugins: [],
    },

    animations: [],

    sourceFiles: {
      rootComponent: 'src/app/App.vue',
      router: 'src/app/router',
      store: 'src/app/stores'
    },
  }
})
