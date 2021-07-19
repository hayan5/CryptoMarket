<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>
<script>

import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    navbar: Navbar
  }
}
</script>

<style lang="css">
@import "./assets/styles.css";
</style>