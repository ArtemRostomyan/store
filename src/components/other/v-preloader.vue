<template>
  <div id="Peloader">
    <div 
      class="cssload-thecube"
      v-if="PRELOADER">
      <div class="cssload-cube cssload-c1"></div>
      <div class="cssload-cube cssload-c2"></div>
      <div class="cssload-cube cssload-c4"></div>
      <div class="cssload-cube cssload-c3"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default{
  name: 'Peloader',
  data(){
    return{}
  },
  methods: {
  },
  computed:{
    ...mapGetters([
      'PRELOADER'
    ])
  }
}
</script>

<style scoped>
</style>
