<template>
  <div class="front-page">
    <Flicking @ready="onCarouselReady" class="slider_front" :plugins="carouselPlugins" :options="carouselSettings">
      <div class="carousel-entry" v-for="image in images" :key="image">
        <img :src="require(`~/assets/images/${image}`)">
      </div>
    </Flicking>

    <div class="title">
      <h1>Blast From The Past</h1>
      <button class="shop">shop now</button>
    </div>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking'
import { AutoPlay } from '@egjs/flicking-plugins'
import "@egjs/vue-flicking/dist/flicking.css"

export default {
  components: {
    Flicking
  },
  methods: {
    onCarouselReady(e) {
      const target = e.currentTarget

      window.addEventListener('resize', () => {
        target.resize()
      })
    }
  },
  data() {
    return {
      images: [
        'Fullview_Person.jpg',
        'Frontview_Person2.jpg',
        'Fullview_person2.jpg',
        'Frontview_Person3.jpg',
        'Sideview_person.jpg',
        'frontview_person4.jpg',
      ],
      carouselSettings: {
        renderOnlyVisible: true,
        circular: true,
        autoResize: true
      },
      carouselPlugins: [
        new AutoPlay({

        })
      ]
    }
  }
};
</script>

<style>
.front-page {
  position:relative;
}

.slider_front {
  position:absolute;
  top: 0;
  left: 0;
  z-index: -2;
}

.carousel-entry {
  @apply w-1/3;
  height: 100vh;
}

.carousel-entry img {
  @apply w-full h-full;
  object-fit: cover;
}

.title {
  @apply flex flex-col justify-center items-center w-full;
  height: 100vh;
}

.title h1 {
  @apply text-7xl;
  color: white;
  text-transform: uppercase;
}

.shop {
  --main-color: #f03036;
  border: 2px solid var(--main-color);
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid var(--main-color);
  opacity: 1;
  background: white;

  /* text */
  font-size: 20px;
  font-weight: bold;
  color: var(--main-color);
  padding: 5px 10px;
  margin: 20px 0;
  text-transform: uppercase;
}


</style>
