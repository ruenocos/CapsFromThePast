<template>
  <div class="layout-container bg-white dark:bg-black">
    <wons-header class="wons-header" />
    <Nuxt />
  </div>
</template>

<style>
.layout-container {
  @apply relative;
}

.wons-header {
  @apply absolute;
  top: 0;
}
</style>
