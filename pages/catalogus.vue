<template>
  <div class="catalogus-page">
    <div class="products">
      <div class="products-filter">
        <span>Loonie Toons</span>
        <span>Tv show 2</span>
        <span>Tv show 3</span>
      </div>
      <div class="products-grid">
        <div class="products-col">
          <a href="/details" class="products-item">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.catalogus-page {
  @apply flex flex-col;
  padding: 2.5rem;
  padding-top: 8rem;
  width: 100%;
}

.products {
  position: relative;
}

.products-filter {
  @apply flex justify-center items-center w-full;
  margin-bottom: 2.5rem;
}

.products-filter span:not(:last-child) {
  margin-right: 2rem;
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
