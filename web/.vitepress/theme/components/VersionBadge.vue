<script setup lang="ts">


export type VersionLink = {
  text?: string;
  type?: "info" | "tip" | "warning" | "danger";
  loader?: "forge" | "neoforge" | "fabric" | "vanilla" | "quilt";
  link?: string;
  id?: string;
};
withDefaults(defineProps<VersionLink>(), {
  type: "tip",
});
let emit = defineEmits();
</script>

<template>
  <span
    class="VPBadge"
    :class="type"
    :style="{ cursor: link !== undefined ? 'pointer' : 'default' }"
  >
    <div class="inner">
      <svg-icon v-if="loader" :iconClass="loader" />
      <slot>{{ text }}</slot>
    </div>
  </span>
</template>

<style>
.inner {
  gap: 4px;
  display: flex;
  align-items: center;
}
.VPBadge {
  vertical-align: bottom;
  display: inline-block;
  margin-left: 2px;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 0 10px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  transform: translateY(-2px);
}

.VPBadge.small {
  padding: 0 6px;
  line-height: 18px;
  font-size: 10px;
  transform: translateY(-8px);
}

.VPDocFooter .VPBadge {
  display: none;
}

.vp-doc h1 > .VPBadge {
  margin-top: 4px;
  vertical-align: top;
}

.vp-doc h2 > .VPBadge {
  margin-top: 3px;
  padding: 0 8px;
  vertical-align: top;
}

.vp-doc h3 > .VPBadge {
  vertical-align: middle;
}

.vp-doc h4 > .VPBadge,
.vp-doc h5 > .VPBadge,
.vp-doc h6 > .VPBadge {
  vertical-align: middle;
  line-height: 18px;
}

.VPBadge.info {
  border-color: var(--vp-badge-info-border);
  color: var(--vp-badge-info-text);
  background-color: var(--vp-badge-info-bg);
}

.VPBadge.tip {
  border-color: var(--vp-badge-tip-border);
  color: var(--vp-badge-tip-text);
  background-color: var(--vp-badge-tip-bg);
}

.VPBadge.warning {
  border-color: var(--vp-badge-warning-border);
  color: var(--vp-badge-warning-text);
  background-color: var(--vp-badge-warning-bg);
}

.VPBadge.danger {
  border-color: var(--vp-badge-danger-border);
  color: var(--vp-badge-danger-text);
  background-color: var(--vp-badge-danger-bg);
}
</style>