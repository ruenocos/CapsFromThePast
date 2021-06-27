<template>
  <div class="details-page">
    <div class="overview">
      <div class="product-thumbnails">
        <img
          src="..\assets\images\Fullview_product.jpg"
          alt=""
          class="thumbnail"
        />
        <img
          src="..\assets\images\Sideview_product.jpg"
          alt=""
          class="thumbnail"
        />
        <img
          src="..\assets\images\Frontview_product.jpg"
          alt=""
          class="thumbnail"
        />
      </div>
      <div class="product-pictures">
        <div class="details-picture-frame">
          <img
            src="..\assets\images\Fullview_product.jpg"
            alt=""
            class="details-picture"
          />
        </div>
        <div class="details-picture-frame">
          <img
            src="..\assets\images\Sideview_product.jpg"
            alt=""
            class="details-picture"
          />
        </div>
        <div class="details-picture-frame">
          <img
            src="..\assets\images\Fullview_product.jpg"
            alt=""
            class="details-picture"
          />
        </div>
      </div>
      <div class="product-details">
        <h3>Vintage Daffy Duck Cap</h3>
        <div class="price">
          <span>$10</span>
        </div>
        <div class="product-description">
          <p>
            The daffy duck cap, a tribute to the old TV show 'loonietoons'. take
            a dive into nostalgia as u rock this cap. The caps are made in the
            Netherlands at our local manufacturer.
          </p>
        </div>
        <div class="product-sizing">
          <button class="product-size">S</button>
          <button class="product-size">M</button>
          <button class="product-size">L</button>
          <button class="product-size">XL</button>
        </div>
        <button class="checkout">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
}

.thumbnail {
  width: 14vw;
  margin-bottom: 0.2rem;
}

.product-pictures {
  @apply flex justify-center items-center flex-col;
  margin: 0 auto;
  height: fit-content;
  height: -webkit-fit-content;
  height: -moz-fit-content;
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
}

.price,
.product-description,
.product-sizing {
  margin-bottom: 2.5rem;
}

.checkout {
  width: 40%;
  text-transform: uppercase;
}
</style>
