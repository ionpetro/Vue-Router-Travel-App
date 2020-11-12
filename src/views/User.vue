<template>
  <div>
    <h1>Hi {{ user }}</h1>
    <button @click="logOut" class="btn">LogOut</button>
  </div>
</template>

<script>
import store from "../store.js";
export default {
  data() {
    return {
      user: store.user,
    };
  },
  methods: {
    logOut() {
      store.user = null;
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
