<template>
  <div class="navbar-burger"
  :class="[{'is-active': isActive}]"
    @click="toggleClick">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  props: {
    isActive: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggle-click')
    }
  }
})
</script>