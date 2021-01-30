<template>
  <div id="Main-Wrapper">
    <basketProduct
      :cardData="basket"/>
    <catalogProduct/>
  </div>
</template>

<script>
import catalogProduct from './Catalog-product'
import basketProduct from './Basket'
import {mapGetters} from 'vuex'
export default{
  name: 'Main-Wrapper',
  components: {
    catalogProduct,
    basketProduct
  },
  data(){
    return{
      masg:'pridurok?'
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

<style lang="scss" scoped>
</style>
