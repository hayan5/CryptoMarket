<template>
  <div class="navbar-container">
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link :to="'/'" class="navbar-item is-size-2">{{navbarBrand}}</router-link>
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
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import NavbarItem, {INavbarItem} from './NavbarItem.vue'
import Hamburger from './Hamburger.vue'
import { useStore } from '../store'
import { ActionTypes } from '../store/action-types'

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
// .navbar-container {
//   padding: 1rem 0rem;
//   border-bottom: 1px solid black;
// }
.navbar {
  border-bottom: 1px solid black;
  // margin: 1rem 0rem;
  max-height: 4rem;
}
.navbar-brand{
  max-height: 4rem;
}
</style>