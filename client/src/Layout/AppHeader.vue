<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link :to="'/'" class="navbar-item is-size-1">{{navbarBrand}}</router-link>
      <hamburger
        :isActive="sidebar()"
        @toggle-click="toggleSideBar" 
      />
    </div>
    <div class="navbar-menu" :class="[{'is-active': sidebar()}]">
      <div class="navbar-start mx-6">
        <navbar-item v-for="(item,index) in navbarItems" :key="index" :info="item"/>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue'
import NavbarItem, {INavbarItem} from './NavbarItem.vue'
import Hamburger from './Hamburger.vue'
import { useStore } from '../store/use'
import {ActionTypes} from '../store/modules/app/action-types'
export default defineComponent({
  components: {
    NavbarItem,
    Hamburger
  },
  props: {
    navbarItems: {
      type: Array as PropType<Array<INavbarItem>>,
      default: () => {
        return null
      }
    },
    navbarBrand: {
      type: String,
      default: 'Home'
    }
  },
  setup() {
    const store = useStore()
    
    function sidebar(): boolean {
      return store.getters.sidebar
    }

    function toggleSideBar(): void {
      store.commit(ActionTypes.TOGGLE_SIDEBAR)
    } 

    return {sidebar, toggleSideBar}
  },
})
</script>
<style lang="scss" scoped>
.navbar {
  border-bottom: 1px solid black;
}
</style>