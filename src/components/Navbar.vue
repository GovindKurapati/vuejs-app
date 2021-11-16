<template>
  <div class="navbar">
    <p class="brand-name">Brand</p>
    <div class="navbar-right" v-show="isUserLoggedIn">
      <!-- <router-link  to="/">Login</router-link> | -->
      <!-- <router-link to="/home">Home</router-link> -->
      <div class="cart-box">
        <p>
          Cart <span>{{ this.$store.state.currentUser.cartItems.length }}</span>
        </p>
      </div>
      <button class="logout-btn" @click="logoutHandler">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isUserLoggedIn: false,
    };
  },
  methods: {
    logoutHandler() {
      this.$store.commit("logoutUser");
      this.$router.push("/");
    },
  },
  created() {
    this.isUserLoggedIn = this.$store.state.currentUser.email ? true : false;
  },
};
</script>

<style scoped>
.navbar {
  background-color: rgb(37, 37, 37);
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.brand-name {
  margin-left: 10px;
  font-size: 24px;
  font-weight: 800;
}
a {
  text-decoration: none;
  color: white;
}
.navbar a.router-link-exact-active {
  font-weight: 800;
}

.navbar-right {
  display: flex;
  gap: 10px;
}
.cart-box p {
  margin: 0;
}
.cart-box {
  background-color: white;
  border-radius: 15px;
  color: black;
  padding: 10px;
}

.cart-box span {
  background-color: rgb(37, 37, 37);
  color: white;
  border-radius: 15px;
  padding: 5px 10px;
}

.logout-btn {
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 15px;
  background-color: white;
  border: none;
  font-size: 16px;
}
</style>
