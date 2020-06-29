<template>
  <div class="header">
    <div class="header__logo">
      <h2 class="header__png">PNG optimize · PNG to WebP</h2>
    </div>
    <div class="header__link">
      <router-link to="/" exact class="link">Home</router-link>
      <router-link to="/About" class="link">About</router-link>
      
    </div>
  </div>
</template>

<style scoped>

.header {
  background-color: #343a40;
    color: #fff;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 15rem;
  margin: 0 1.5rem;
}

a.router-link-active{
  border-bottom: 4px solid #007bff;
  color: #fff;
}
.header__home {
  
  border-bottom: 4px solid #007bff;
  padding-bottom: 8px;
}
.header__about {
  
  padding-bottom: 8px;
}

.link{
  color: #6c757d;
  text-decoration: none;
  margin-right: 15px;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
  transition: color 0.3s ease-out, border-color 0.3s ease-out;
  
}

.link:hover {
  color: #fff;
  border-bottom: 4px solid #007bff;
  transition: .1s;
}
</style>