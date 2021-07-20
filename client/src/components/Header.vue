<template>
  <div class="header">
    <div class="header-brand">
      <div class="header-logo">
        <router-link to="/">Home</router-link>
      </div>
    </div>
    <ul class="header-menu">
      <li class="header-item"><router-link to="/vote">Vote</router-link></li>
      <li class="header-item"><router-link to="/buy">Buy</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  border-bottom: 1px solid black;
}

.header-logo {
  font-size: 35px;
}
.header-menu {
  flex-grow: 1;
  display: flex;
  margin-left: 120px;
}
.header-item {
  margin: .75rem;
  font-size: 20px;
  

}
a {
    text-decoration: none;
    color: black;
  }

</style>