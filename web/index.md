---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
footer: true

hero:
  name: "ThinkingStudio"
  text: "A Minecraft Java Edition mod development team."
  tagline: More think, more do.
  image:
    src: https://avatars.githubusercontent.com/u/79696465?s=200&v=4
    alt: ThinkingStudio
  actions:
    - theme: brand
      text: Mods
      link: /mod/index
    - theme: alt
      text: Mod Docs
      link: /docs/index
    
features:
  - title: Port Fabric/Quilt Mod to (Neo)Forge
    details: We port the QOL/API mods from Fabric/Quilt to (Neo)Forge.
  - title: Port Fabric/Quilt/(Neo)Forge to Architectury toolchain
    details: We port the QOL/API mods from Fabric/Quilt/(Neo)Forge to Architectury toolchain.
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(right, #f83600 0%, #f9d423 100%);

  --vp-home-hero-image-background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  --vp-home-hero-image-filter: blur(44px);
}

</style>