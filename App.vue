<template>
  <div 
    id="app">  
   <div class="container">
      <mainWrapper/>
    </div>
  </div>
</template>

<script>

import mainWrapper from './components/Main-Wrapper'
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
