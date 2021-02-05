<template>
  <div id="Main-Wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
export default{
  name: 'Main-Wrapper',
  components: {
  },
  data(){
    return{
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'basket'
    ])
  }
}
</script>

<style lang="scss">
#Main-Wrapper{
  width: 100%;
  height: 100%;
}

</style>
