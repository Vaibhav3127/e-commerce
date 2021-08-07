<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
  background-image: url("https://cdn.wallpapersafari.com/54/45/xczipd.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.logo {
  width: 100px;
}
.register input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  border: 1px solid skyblue;
}
.register button,
.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  cursor: pointer;
  color: white;
  background-color: rgb(42, 101, 124);
}
</style>