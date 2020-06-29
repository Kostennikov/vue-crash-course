<template>
  <div id="app">
    <Layout />
  </div>
</template>
  
<script>
// import Main from '@/components/Main'
//import Layout from "@/components/Layout";
import Layout from "@/components/Layout";

export default {
  name: "App",
  
  components: {
    Layout
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
.page {
  background-color: #343a40;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
}
</style>

