import { defineConfig } from 'vitepress'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import banner from 'vite-plugin-banner'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ThinkingStudio website",
  description: "ThinkingStudio's website",
  base: "/website/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://github.com/ThinkingStudios.png",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mods', link: '/mod/index' },
      { text: 'Mod Docs', link: '/docs/index' }
    ],

    sidebar: [
      {
        text: 'Mods',
        items: [
          { text: 'RyoamicLights', link: '/mod/ryoamiclights' },
          { text: 'Masa\'s Mods (Neo)Forge port', link: '/mod/forged-masa-mods' }
        ]
      },
      {
        text: 'Docs',
        items: [
          { text: 'RyoamicLights Docs', link: '/docs/ryoamiclights/index' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]

    
  },

  vite: {
    plugins:[
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "web/icon")], // icon存放的目录
        symbolId: "icon-[name]", // symbol的id
        inject: "body-last", // 插入的位置
        customDomId: "__svg__icons__dom__" // svg的id
      }),
      banner('This is the banner content.')
    ]
  }
})
