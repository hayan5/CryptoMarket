<template>
  <nav class="navbar">
    <ul class="navbar-items">
      <navbar-item name="Home" path="/"></navbar-item>
      <navbar-item name="Graph" path="/graph"></navbar-item>
      <navbar-item name="Vote" path="/vote"></navbar-item>
      <navbar-item name="Bid" path="/bid"></navbar-item> 
    </ul>
  </nav>
</template>

<script>
import NavbarItem from '@/components/NavbarItem.vue'
export default {
  name: 'Navbar',
  components: {
    navbarItem: NavbarItem
  }
}
</script>
<style lang="css" scoped>
  .navbar {
    /* justify-content: center;
    align-items: center; */
    /* margin: auto auto; */
  }
  .navbar-items {
    margin: auto auto;
    display: flex;
    width: 50%;
  }

</style>

