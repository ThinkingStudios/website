<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { VersionLink } from "./VersionBadge.vue";
import { Version } from "./VersionBox.vue";
import VersionLine from "./VersionLine.vue";
import { useData, useRoute } from "vitepress";
const { Layout } = DefaultTheme;

const { frontmatter } = useData();

import { useElementSize } from '@vueuse/core';
import { ref, watchEffect } from 'vue';

const el = ref();
const { height } = useElementSize(el);

watchEffect(() => {
  if (height.value) {
    document.documentElement.style.setProperty(
      '--vp-layout-top-height',
      `${height.value + 16}px`
    );
  }
});

function checkVersion(elements: Array<VersionLink>, text: string) {
  if (elements) {
    let check = true;
    elements.forEach((element) => {
      if (element.text == text) check = false;
    });
    return check;
  }
  return false;
}
function loadsVersion(frontmatter: { versions: { id: any; vanilla: any; loaders: any[]; others: any[]; }; }, posts: any[]) {
  const { path } = useRoute();
  // console.log(path);
  const versions: Array<Version> = [];
  if (frontmatter.versions) {
    const vanillas: Array<VersionLink> = [];
    const loaders = {
      fabric: [],
      neoforge: [],
      forge: [],
      quilt: [],
      vanilla: [],
    };
    const others = {};
    if (frontmatter.versions.id) {
      posts?.forEach((element: { frontmatter: { versions: { id: any; vanilla: string; loaders: any[]; others: any[]; }; }; url: string; }) => {
        if (
          element.frontmatter.versions &&
          element.frontmatter.versions.id &&
          element.frontmatter.versions.id === frontmatter.versions.id &&
          path !== element.url // 不能是自己页面的
        ) {
          if (checkVersion(vanillas, element.frontmatter.versions.vanilla)) {
            vanillas.push({
              text: element.frontmatter.versions.vanilla,
              loader: "vanilla",
              link: element.url,
            });
          }
          element.frontmatter.versions.loaders.forEach((ele: { loader: string; text: string; link: any; }) => {
            if (
              ele.loader &&
              ele.loader != "vanilla" &&
              checkVersion(loaders[ele.loader], ele.text)
            ) {
              ele.link = element.url;
              loaders[ele.loader].push(ele);
            }
          });
          element.frontmatter.versions.others.forEach((ele: VersionLink) => {
            if (ele.id) {
              if (others[ele.id] === undefined) {
                // 不存在先创建
                others[ele.id] = [];
              }
              if (checkVersion(others[ele.id], ele.text ?? '')) {
                ele.link = element.url;
                others[ele.id].push(ele);
              }
            }
          });
        }
      });
    }
    if (frontmatter.versions.vanilla) {
      versions.push({
        current: {
          text: frontmatter.versions.vanilla,
          loader: "vanilla",
        },
        others: vanillas,
      });
    }
    if (frontmatter.versions.loaders)
      frontmatter.versions.loaders.forEach((element: VersionLink) => {
        versions.push({ current: element, others: loaders[element.loader ?? ''] });
      });
    if (frontmatter.versions.others)
      frontmatter.versions.others.forEach((element: VersionLink) => {
        versions.push({ current: element, others: others[element.id?? ''] });
      });
  }
  // console.log(versions);
  return versions;
}

</script>

<template>
  <Layout>
    <template #doc-before>
      <VersionLine :versions="loadsVersion(frontmatter, posts)"></VersionLine>
      <p style="color: grey">{{ frontmatter.description }}</p>
    </template>
  </Layout>
  <div ref="el" class="banner">
    <div class="text">
        ThinkingStudio's Website is a work in progress. Report issues on <a
        href="https://github.com/ThinkingStudios/website/issues" target="_blank" rel="noopener noreferrer">Github</a>.
    </div>
  </div>
</template>

<style>
html {
  --vp-layout-top-height: 88px;
}

@media (min-width: 375px) {
  html {
    --vp-layout-top-height: 64px;
  }
}

@media (min-width: 769px) {
  html {
    --vp-layout-top-height: 40px;
  }
}
</style>

<style scoped>
.banner {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--vp-z-index-layout-top);

  padding: 8px;
  text-align: center;

  background: rgb(204, 69, 27);
  color: #fff;

  display: flex;
  justify-content: space-between;
}

.text {
  flex: 1;
}

a {
  text-decoration: underline;
}
</style>

