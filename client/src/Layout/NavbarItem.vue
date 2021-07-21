<template>
  <router-link class="navbar-item is-size-5 px-5" :to="info.path">
    {{info.text}}
  </router-link>
</template>
<script lang="ts">
import { defineComponent, PropType} from 'vue'

export interface INavbarItem{
  path: string
  text: number
}

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<INavbarItem>,
      default: () => {
        return {
          path: '/',
          text: 'default'
        }
       
      }
    }
  }
})
</script>