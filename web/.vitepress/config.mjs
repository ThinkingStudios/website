import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ThinkingStudio Website",
  description: "ThinkingStudio's website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
      { icon: 'github', link: 'https://github.com/ThinkingStudios/website' }
    ]
  }
})
