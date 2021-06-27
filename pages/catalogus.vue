<template>
  <div class="catalogus-page">
    <div class="products">
      <div class="products-grid">
        <div class="products-col" v-for="col in cols" :key="col.toString()">
          <a
            :href="product.path"
            class="products-item"
            v-for="product in col"
            :key="product.path"
          >
            <img :src="require(`~/assets/images/${product.images[0]}`)" />
          </a>
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
    const products = await $content("products").fetch();

    const cols = [];
    for (let i = 0; i < 4; i++) {
      const row = [];

      row.push(...products);

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
  grid-template-columns: repeat(2, [col-start] 0.75fr 1fr [col-end]);
  grid-column-gap: 2.5rem;
  overflow: hidden;
}

.products-col {
  @apply flex flex-col;
}

.products-col:last-child {
  flex-grow: 1;
}

.products-item {
  @apply w-full;
  position: relative;
  margin-bottom: 2.5rem;
}
</style>
