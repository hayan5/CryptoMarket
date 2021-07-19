<template>
  <nav class="navbar">
    <ul>
      <navbar-item name="Home" path="/"></navbar-item>
      <navbar-item name="View" path="/view"></navbar-item>
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


