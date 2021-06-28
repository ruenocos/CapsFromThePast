<template>
  <div class="details-page">
    <div class="overview">
      <div class="product-thumbnails">
        <nuxt-link
          v-for="image in product.images"
          :key="image"
          :to="product.path + '#' + imageId(image)"
          @click="onThumbnailClick"
        >
          <nuxt-img
            :src="`${/CapsFromThePast/}/${image}`"
            alt=""
            class="thumbnail"
          />
        </nuxt-link>

        <!-- <img
          src="assets\images\Sideview_product.jpg"
          alt=""
          class="thumbnail"
        />
        <img
          src="assets\images\Frontview_product.jpg"
          alt=""
          class="thumbnail"
        /> -->
      </div>
      <div class="product-pictures">
        <div
          v-for="image in product.images"
          :key="image"
          class="details-picture-frame"
          :id="imageId(image)"
        >
          <nuxt-img
            :src="`${/CapsFromThePast/}/${image}`"
            alt=""
            class="details-picture"
          />
        </div>
        <!-- <div class="details-picture-frame">
          <img
            src="assets\images\Sideview_product.jpg"
            alt=""
            class="details-picture"
          />
        </div>
        <div class="details-picture-frame">
          <img
            src="assets\images\Fullview_product.jpg"
            alt=""
            class="details-picture"
          />
        </div> -->
      </div>
      <div class="product-details">
        <h3>{{ product.name }}</h3>
        <div class="price">
          <span>{{ computedPrice(product.price) }}</span>
        </div>
        <div class="product-description">
          <nuxt-content :document="product"></nuxt-content>
        </div>
        <div class="product-sizing">
          <div
            @click="onSizeChange"
            class="product-size px-2"
            :class="size === currentSize ? 'text-orange font-bold' : ''"
            v-for="size in sizes"
            :key="size"
          >
            {{ sizeText(size) }}
          </div>
        </div>
        <div class="checkout-container">
          <button @click="onAddToCart" class="checkout">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params, query, store }) {
    return params.slug.length > 0;
  },
  async asyncData({ $content, params }) {
    const product = await $content("products", params.slug).fetch();

    return {
      product,
      currentSize: "M",
      sizes: ["S", "M", "L", "XL"]
    };
  },
  methods: {
    sizeText(text) {
      if (text === this.currentSize) {
        return `[ ${text} ]`;
      }
      return text;
    },
    onSizeChange(event) {
      const newSize = event.target.innerText;

      console.log(newSize);
      this.currentSize = newSize;
    },
    onAddToCart() {
      const slug = this.product.path + "--" + this.currentSize;

      let productInfo = sessionStorage.getItem(slug);

      if (productInfo === null) {
        productInfo = {
          img: this.product.images[0],
          name: this.product.name,
          quantity: 1,
          size: this.currentSize,
          price: this.product.price,
          key: this.product.path
        };
      } else {
        productInfo = JSON.parse(productInfo);
        productInfo.quantity++;
      }

      sessionStorage.setItem(slug, JSON.stringify(productInfo));

      if (window.updateCart === undefined) {
        setTimeout(() => {
          window.updateCart(null, true);
        }, 500);
      } else {
        window.updateCart(null, true);
      }
    },
    computedPrice(price) {
      return `$${price}`;
    },
    onThumbnailClick(event) {
      const id = event.target.parentElement.getAttribute("src");
      const el = document.getElementById(id.substr(id.indexOf("#") + 1));

      scroll({
        top: el.offsetTop,
        behavior: "smooth"
      });
    },
    imageId(image) {
      return "image" + this.product.images.indexOf(image);
    }
  }
};
</script>

<style>
.overview {
  @apply flex;
  position: relative;
}

.product-thumbnails {
  @apply flex justify-center items-center flex-col;
  top: 0;
  height: 100vh;
  position: sticky;
  margin: 0 4vw;
  padding-top: 10rem;
}

.thumbnail {
  @apply cursor-pointer;
  width: 14vw;
  margin-bottom: 0.2rem;
}

.product-pictures {
  @apply flex justify-center items-center flex-col;
  margin: 0 auto;
  height: fit-content;
  padding: 10rem 0;
}

.details-picture-frame {
  height: 80vh;
  width: 40vw;
  margin-bottom: 2rem;
  position: relative;
}

.details-picture-frame img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

.product-details {
  @apply flex flex-col justify-center;
  top: 0;
  width: 100%;
  height: 100vh;
  position: sticky;
  margin: 0 6vw;
  padding-top: 10rem;
}

.product-details * {
  @apply font-sans;
}

.product-details h3 {
  @apply text-black dark:text-white uppercase;
}

.price {
  @apply text-orange font-bold;
}

.product-description {
  @apply text-gray;
}

.product-sizing {
  @apply flex text-black dark:text-white cursor-pointer;
}

.price,
.product-description,
.product-sizing {
  margin-bottom: 1rem;
}

.checkout {
  @apply text-orange border-orange border-2 font-semibold;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
}
</style>
