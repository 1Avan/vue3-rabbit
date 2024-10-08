import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
//element-plus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  server: {
    host: '0.0.0.0', // 配置项目可以局域网访问
    cors: true, // 默认启用并允许任何源
  },
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        // 1.配置elementPlus采用sass样式配色系统
        ElementPlusResolver({ importStyle: "sass" })
      ],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 2.自动导入定制化样式文件进行样式覆盖
        additionalData: `
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/varColor.scss" as *;
        
        `,
      }
    }
  }
})
