<template>
  <div class="wons-footer">
      <nav class="wons-footer-socials">
        <ul>
          <li v-for="social in socials" :key="social.name">
            <a :src="social.link">
              <svg-icon :name="social.icon">{{ social.name }}</svg-icon>
            </a>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { link: "facebook.com", icon: "facebook", name: "Facebook" },
        { link: "twitter.com", icon: "twitter", name: "Twitter" },
        { link: "instagram.com", icon: "instagram", name: "Instagram" }
      ]
    };
  }
};
</script>

<style>
.wons-footer {
  @apply flex w-full justify-between px-8 md:px-16 py-4 md:py-16 items-center;
}

.wons-footer-socials {
  @apply w-full flex flex-col items-center;
}

.wons-footer-socials > ul {
  @apply flex flex-row;
}

.wons-footer-socials > ul > li {
  @apply px-4;
}

.icon {
  @apply w-8 h-8;
}
</style>
