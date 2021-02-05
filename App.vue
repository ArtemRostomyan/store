<template>
  <div 
    id="app">  
   <div class="container">
      <mainWrapper/>
    </div>
  </div>
</template>

<script>

import mainWrapper from './components/v-main-wrapper'
export default {
  name: 'app',
  components:{
    mainWrapper
  },
  data () {
    return {
      msg: 0
    }
  },
  
}
</script>

<style lang="scss">

</style>
