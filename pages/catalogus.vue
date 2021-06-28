<template>
  <div class="catalogus-page">
    <div class="products">
      <div class="products-grid">
        <div class="products-col" v-for="col in cols" :key="col.toString()">
          <nuxt-link
            :to="product.path"
            class="products-item"
            v-for="product in col"
            :key="product.path"
          >
            <nuxt-img
              :src="
                `${router.base}${
                  product.images[
                    Math.floor(Math.random() * product.images.length)
                  ]
                }`
              "
            />
          </nuxt-link>
        </div>
        <!-- <div class="products-col">
          <a href="" class="products-item">
            <img src="..\assets\images\Fullview_product.jpg" />
          </a>
          <a href="" class="products-item">
            <img src="..\assets\images\Fullview_product.jpg" />
          </a>
          <a href="" class="products-item">
            <img src="..\assets\images\Fullview_product.jpg" />
          </a>
        </div>
        <div class="products-col">
          <a href="" class="products-item">
            <img src="..\assets\images\Fullview_product.jpg" />
          </a>
          <a href="" class="products-item">
            <img src="..\assets\images\Fullview_product.jpg" />
          </a>
          <a href="" class="products-item">
            <img src="..\assets\images\Fullview_product.jpg" />
          </a>
          <a href="" class="products-item">
            <img src="..\assets\images\Fullview_product.jpg" />
          </a>
        </div>
        <div class="products-col">
          <a href="" class="products-item">
            <img src="..\assets\images\Fullview_product.jpg" />
          </a>
          <a href="" class="products-item">
            <img src="..\assets\images\Fullview_product.jpg" />
          </a>
          <a href="" class="products-item">
            <img src="..\assets\images\Fullview_product.jpg" />
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const cols = [];
    for (let i = 0; i < 4; i++) {
      const row = [];
      const products = await $content("products").fetch();

      if (i % 2 === 0) {
        const cloneProduct = products[0];
        cloneProduct.path;
        row.push(...products);
        row.push(cloneProduct);
      } else {
        row.push(...products);
      }

      cols.push(row);
    }

    return {
      cols
    };
  }
};
</script>

<style>
.catalogus-page {
  @apply flex flex-col;
  padding: 2.5rem;
  padding-top: 8rem;
  width: 100%;
}

.products {
  @apply pt-10;
  position: relative;
}

.products-grid {
  @apply w-full min-h-full;
  display: grid;
  grid-template-columns: repeat(2, [col-start] 0.85fr 0.95fr [col-end]);
  grid-column-gap: 2.5rem;
  overflow: hidden;
}

.products-col {
  @apply flex flex-col h-full;
}

.products-item {
  @apply h-full w-full;
  flex-grow: 1;
  position: relative;
  margin-bottom: 2.5rem;
}

.products-item img {
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
}
</style>
