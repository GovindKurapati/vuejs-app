<template>
  <p class="loading-text">{{ loading ? "Loading..." : "" }}</p>
  <div class="card-container">
    <div class="card" v-for="item in items" :key="item.id">
      <div class="image-wrapper">
        <img :src="item.image" alt="item.name" />
      </div>
      <div class="card-info">
        <h3 :title="item.title">{{ item.title }}</h3>
        <p>$ {{ item.price }}</p>
        <button
          class="add-cart-btn"
          @click="addToCart(item)"
          v-if="item.itemsInCart == 0"
        >
          Add to Cart
        </button>

        <div class="add-cart-actions" v-else>
          <button @click="removeFromCart(item)" class="action-btn">-</button>
          <p>{{ item.itemsInCart }}</p>
          <button @click="addToCart(item)" class="action-btn">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  data() {
    return {
      items: [],
      loading: false,
    };
  },
  methods: {
    addToCart(item) {
      this.items.map((i) => {
        if (i.id == item.id) {
          i.itemsInCart = i.itemsInCart + 1;
        }
      });
      console.log(this.items);
      this.$store.commit("addItemtoCart", item);
    },
    removeFromCart(item) {
      this.items.map((i) => {
        if (i.id == item.id) {
          i.itemsInCart = i.itemsInCart - 1;
        }
      });
      console.log(this.items);
      this.$store.commit("removeItemFromCart", item);
    },
  },
  async created() {
    this.loading = true;
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.loading = false;

        this.items = json.map((i) => {
          var o = Object.assign({}, i);
          o.itemsInCart = 0;
          return o;
        });
      })
      .catch((e) => {
        this.loading = false;
        console.log("Exception ", e);
      });
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  display: inline-block;
  margin: 15px;
  width: 300px;
  padding: 10px;
  /* border: 1px solid rgb(204, 201, 201); */
  border-radius: 5px;
  -webkit-box-shadow: 0 0 2px 3px rgb(241, 241, 241);
  -moz-box-shadow: 0 0 2px 3px rgb(241, 241, 241);
  box-shadow: 0 0 5px 3px rgb(241, 241, 241);
}

h3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  height: 350px;
  align-items: center;
  padding: 10px;
}

img {
  width: 100%;
  max-height: 100%;
}

.card-info {
  /* background-color: rgb(241, 238, 238); */
  padding: 10px;
  border-radius: 5px;
}

.add-cart-actions {
  display: flex;
  justify-content: space-evenly;
}

.add-cart-btn {
  width: 100%;
}

.add-cart-btn,
.action-btn {
  padding: 15px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(37, 37, 37);
  color: white;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
}
.action-btn {
  padding: 15px;
}

.loading-text {
  text-align: center;
}
</style>
