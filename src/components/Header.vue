<template>
  <div class="nav">
    <a href="#">Home</a>
    <a href="#">Fav</a>
    <a href="#">Cart</a>
    <a href="#">Profile</a>
    <a v-on:click="logout" href="#">Log Out</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style>
.nav {
  background-color: rgb(7, 64, 66);
  overflow: hidden;
}
.nav a {
  float: left;
  color: cornsilk;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-left: 5px;
}
.nav a:hover {
  background-color: cornsilk;
  color: rgb(5, 5, 5);
}
</style>