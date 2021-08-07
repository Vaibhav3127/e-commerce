<template>
  <Header />
  <img
    class="img1"
    src="https://images.unsplash.com/photo-1562772186-ad68d3906ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
  />
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
<style>
.img1 {
  height: 150px;
  width: 150px;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  padding: auto;
  overflow: hidden;
}
</style>