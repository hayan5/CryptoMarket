<template>
  <li class="navbar-item"><router-link :to=path>{{name}}</router-link></li>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>