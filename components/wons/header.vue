<template>
  <div class="wons-header">
    <!-- header -->
    <div class="wons-header-logo">
      <nuxt-link to="/">
        <h2>CapsFromThePast</h2>
      </nuxt-link>
    </div>
      <nav class="wons-header-navigation ">
        <ul>
          <li v-for="navItem in navigation" :key="navItem.name">
            <NuxtLink :to="navItem.link">{{ navItem.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        { link: "/", name: "Catalogus" },
        { link: "/", name: "Contact" },
        { link: "/", name: "Winkelmandje" },
      ]
    };
  }
};
</script>

<style>
.wons-header {
  @apply flex w-full justify-between px-8 md:px-16 py-4 md:py-16 items-center;
}

.wons-header-logo {
  @apply text-2xl md:text-4xl;
}

.wons-header-navigation {
  @apply flex flex-col;
}

.wons-header-navigation > ul {
  @apply flex-row flex;
}

.wons-header-navigation > ul > li {
  @apply px-4;
}
</style>
