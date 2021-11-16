import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: {
      email: "",
      password: "",
      cartItems: [],
    },
  },
  mutations: {
    setUserData(state, payload) {
      state.currentUser.email = payload.email;
      state.currentUser.password = payload.password;
    },
    logoutUser(state) {
      console.log("From logout");
      state.currentUser.email = "";
      state.currentUser.password = "";
    },
    addItemtoCart(state, item) {
      state.currentUser.cartItems.push({
        ...item,
        itemsInCart: item.itemsInCart + 1,
      });
    },
    removeItemFromCart(state, item) {
      var itemIndex = state.currentUser.cartItems.findIndex(
        (i) => i.id == item.id
      );
      state.currentUser.cartItems.splice(itemIndex, 1);
      // state.currentUser.cartItems = state.currentUser.cartItems.filter(
      //   (i) => i.id != item.id
      // );
    },
  },
  actions: {},
  modules: {},
  getters: {
    getUserData(state) {
      console.log(state.currentUser);
    },
  },
});
