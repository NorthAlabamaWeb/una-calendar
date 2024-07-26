<template>
  <div id="app">
    <nav>
      <router-link to="/">Announcement Form</router-link>
      <router-link to="/listings">Announcement Listings</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
// No additional setup required here
</script>

<style>
nav {
  margin-bottom: 20px;
}

a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}

a.router-link-active {
  font-weight: bold;
}
</style>