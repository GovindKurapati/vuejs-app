<template>
  <Navbar />
  <h3>Welcome {{ userName }}</h3>
  <ItemCard />
</template>

<script>
import ItemCard from "./ItemCard.vue";
import Navbar from "./Navbar.vue";

export default {
  name: "Home",
  data() {
    return {
      userName: "",
    };
  },
  components: { ItemCard, Navbar },
  created() {
    if (
      this.$store.state.currentUser.email &&
      this.$store.state.currentUser.password
    ) {
      console.log("Login success");
      this.userName = this.$store.state.currentUser.email;
    } else {
      console.log("Login failed");
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>
