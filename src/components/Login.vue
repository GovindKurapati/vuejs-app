<template>
  <div class="login-container">
    <div class="login-form-container">
      <form v-on:submit.prevent="formSubmit">
        <label for="email">Email</label> <br />
        <input type="text" id="email" v-model="email" /><br />

        <label for="password">Password</label> <br />
        <input type="password" id="password" v-model="password" /><br />

        <button class="login-btn" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    formSubmit() {
      if (this.email && this.password) {
        this.$store.commit("setUserData", {
          email: this.email,
          password: this.password,
        });
        this.$router.push("/home");
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  background: url("https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-form-container {
  display: flex;
  justify-content: center;
  width: 500px;
  padding: 20px 10px;
  background-color: white;
  border-radius: 5px;
  align-items: center;
}

#email,
#password {
  width: 450px;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  margin-left: 5px;
}

.login-btn {
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #3e3636;
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin: 10px 0;
}
</style>
