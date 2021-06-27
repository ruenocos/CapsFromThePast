<template>
  <div class="wons-header">
    <wons-basket @onCartUpdate="onCartUpdate" ref="basket" />
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
          <li @click="onCartClick">
            Cart {{ cartCount }}
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
      ],
      cartCountReal: 0
    };
  },
  computed: {
    cartCount() {
      if (this.cartCountReal > 0) {
        return this.cartCountReal
      }

      return ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.onCartUpdate()

      global['updateCart'] = this.onCartUpdate.bind(this)
    }, 300)
  },
  methods: {
    onCartClick() {
      this.$refs.basket.clickToggle()
    },
    onCartUpdate(event, forceUpdate = false) {
      if (forceUpdate) {
        this.$refs.basket.updateObjectData()
      }

      this.cartCountReal = this.$refs.basket.getItemCount()
      console.log(this.cartCountReal)
    }
  }
};
</script>

<style>
.wons-header {
  @apply flex flex-1 w-full justify-between px-8 py-4 items-center;
  color: white;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
  z-index: 5;
}

.wons-header::before {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  position: absolute;

  content: '';
  z-index: -1;

  backdrop-filter: blur(5px);

  box-shadow: inset 0 0 2000px #0f0e17d0;
}

.wons-header > * {
  @apply w-1/3;
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
  @apply flex justify-end;
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
  @apply w-1/3;
}
</style>
