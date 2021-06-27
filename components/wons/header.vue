<template>
  <div class="wons-header">
    <!-- header -->
    <div class="wons-header-logo">
      <nuxt-link to="/">
        <img src="../../assets/sprite/svg/CapsFromThePast.svg">
      </nuxt-link>
    </div>
      <nav class="wons-header-navigation">
        <ul>
          <li v-for="navItem in navigation" :key="navItem.name">
            <NuxtLink :to="navItem.link">{{ navItem.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="wons-header-navigation-right">
        <ul>
          <li>
            Dark Mode
          </li>
          <li>
            Cart
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
        { link: "/catalogus", name: "Shop" },
        { link: "/", name: "Information" }
      ]
    };
  }
};
</script>

<style>
.wons-header {
  @apply flex flex-1 w-full justify-between px-8 py-4 items-center;
  background: #0f0e1734 0% 0%;
}

.wons-header-logo {
  @apply items-center justify-center;
}

.wons-header-logo > img {
  @apply w-20 h-20 ;
}

.wons-header-navigation {
  @apply flex justify-center;
}

.wons-header-navigation-right {
  @apply flex justify-center;
}

.wons-header-navigation-right li:not(:last-child) {
  margin-right: 2.5rem;
}

.wons-header-navigation ul, .wons-header-navigation-right ul {
  @apply flex-row flex;
}

.wons-header-navigation > ul > li {
  @apply px-4;
}

.wons-header-logo img {
  @apply w-1/2;
}
</style>
