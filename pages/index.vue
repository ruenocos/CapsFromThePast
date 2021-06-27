<template>
  <div class="front-page">
    <div class="slider">
      
    </div>
    <div class="slider">

    </div>
    <div class="slider">

    </div>
    <div class="title">
      <h1>Blast From The Past</h1>
      <button class="shop">shop now</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  @apply flex flex-col justify-center items-center w-full;
  height: 100vh;
}

.title h1 {
  @apply text-7xl;
  text-transform: uppercase;
}

.shop {
  --main-color: #f03036;
  border: 2px solid var(--main-color);
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid var(--main-color);
  opacity: 1;

  /* text */
  font-size: 20px;
  font-weight: bold;
  color: var(--main-color);
  padding: 5px 10px;
  margin: 20px 0;
  text-transform: uppercase;
}
</style>
