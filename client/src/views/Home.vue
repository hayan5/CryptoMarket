<template>
  <div class="container1">
    <h1>Current Prices</h1>
    
    <chart-container></chart-container>
  
  </div>
</template>

<script>
// import ChartContainer from '@/components/ChartContainer.vue'
import ChartContainer from '../components/ChartContainer.vue';
export default {
  name: "Home",
  components: {ChartContainer}
};
</script>
<style lang="scss" scoped>
.container1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1 {
  font-size: 50px;
  margin: 20px 0;
}
</style>
