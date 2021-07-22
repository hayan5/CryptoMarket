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
<style lang="scss" scoped>
.navbar-burger {
  height: 4rem;
  width: 4rem;
  span {
    width: 30px;
    left: calc(50% - 15px);
    &:nth-child(1) {
      top: calc(50% - 8px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 7px);
    }
  }
  &.is-active {
    span {
      &:nth-child(1) {
        transform: translateY(7px) rotate(45deg)
      }
      &:nth-child(2) {
        opacity: 0
      }
      &:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg)
      }
    }

  }
}
</style>