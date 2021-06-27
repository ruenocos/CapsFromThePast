<template>
  <div v-if="enabled" class="basket-container">
    <div class="basket">
      <div class="basket-row-btns">
        <span @click="clickToggle">
          <svg-icon class="basket-close" name="close" />
        </span>
      </div>
      <div class="basket-row-items">
        <div v-for="item in items" :key="item.path" class="item-container">
          <div class="item-img">
            <img :src="require(`~/assets/images/${item.img}`)" />
          </div>
          <div class="item-details">
            <span>
              {{ item.name }}
            </span>
            <span class="price-checkout"> ${{ item.price }} </span>
            <span class="remove" @click="removeItem(item)">
              REMOVE
            </span>
          </div>
          <div class="item-props-container">
            <div class="item-props">
              <span> QTY: {{ item.quantity }} </span>
              <span> SIZE: {{ item.size }} </span>
            </div>
          </div>
        </div>
        <div v-if="items.length === 0">
          No items
        </div>
      </div>
      <div class="basket-row-line" />
      <div class="basket-row-checkout">
        <span class="basket-row-checkout-span">TOTAL ${{ total }}</span>
        <button>Proceed to checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.updateObjectData();
  },
  methods: {
    clickToggle() {
      this.enabled = !this.enabled;
      this.updateObjectData();
    },
    removeItem(item) {
      item.quantity--;
      if (item.quantity === 0) {
        sessionStorage.removeItem(item.key + "--" + item.size);
      } else {
        sessionStorage.setItem(
          item.key + "--" + item.size,
          JSON.stringify(item)
        );
      }

      this.updateObjectData();
    },
    getItemCount() {
      let total = 0;

      this.items.forEach(item => (total += item.quantity));

      return total;
    },
    updateObjectData() {
      const basket_items = [];

      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key.indexOf("--") === -1) continue;
        basket_items.push(JSON.parse(sessionStorage.getItem(key)));
      }

      this.items = basket_items;

      this.total = 0;
      this.items.forEach(item => {
        this.total += item.quantity * parseInt(item.price);
      });

      this.$emit("onCartUpdate");
    }
  },
  data() {
    return {
      enabled: false,
      items: [],
      total: 0
    };
  }
};
</script>

<style scoped>
.basket-container {
  @apply flex flex-row justify-center items-center fixed bottom-0 left-0 w-full h-full;
}

.basket {
  @apply w-1/2 h-1/2 flex flex-col p-4 text-white;

  background: #0f0e1780 0% 0% no-repeat padding-box;
  backdrop-filter: blur(5px);
}

.basket-row-btns {
  @apply flex justify-end pb-4;
}

.basket-row-items {
  @apply flex flex-col overflow-y-scroll flex-grow;
}

.item-img {
  @apply flex justify-center h-full;
}

.item-img img {
  @apply h-full w-48;
  object-fit: contain;
}
.item-container {
  @apply flex py-4 w-full items-center;
  max-height: 120px;
}

.basket-close {
  @apply h-8 w-8;
  fill: white;
}

.item-details {
  @apply flex flex-col px-4 w-full;
}

.item-details span:last-child {
  padding-top: 5px;
}

.item-details span:not(:last-child) {
  @apply leading-3;
  padding-top: 5px;
}

.price-checkout {
  @apply text-orange font-bold;
}

.remove {
  @apply text-gray cursor-pointer;
}

.item-props-container {
  @apply flex flex-col flex-grow w-full h-full;
  align-items: flex-end;
}

.item-props {
  @apply flex flex-col px-4 justify-center h-full text-orange font-semibold w-24;
  border-left: 1px solid white;
}

.basket-row-line {
  @apply w-full pt-4;

  border-bottom: 3px white solid;
}

.basket-row-checkout {
  @apply flex self-end justify-between pt-4 items-center w-full;
}

.basket-row-checkout-span {
  @apply text-2xl font-semibold;
}

.basket-row-checkout button {
  @apply text-orange border-orange border-2 font-bold;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
}
</style>
