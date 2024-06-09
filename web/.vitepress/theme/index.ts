// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import VSvg from './components/VSvg.vue'
import VersionBadge from './components/VersionBadge.vue'
import VersionBox from './components/VersionBox.vue'
import VersionLine from './components/VersionLine.vue'
import 'virtual:svg-icons-register'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,

  enhanceApp({ app, router, siteData }) {
    app.component('svg-icon' , VSvg)
    app.component('VersionBadge' , VersionBadge)
    app.component('VersionBox' , VersionBox)
    app.component('VersionLine' , VersionLine)
  }
} satisfies Theme
