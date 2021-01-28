<template>
  <div id="Main-Wrapper">
    <basketProduct/>
    <catalogProduct/>
  </div>
</template>

<script>
import catalogProduct from './Catalog-product'
import basketProduct from './Basket-product'

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
  methods:{
  }
}
</script>

<style lang="scss" scoped>
</style>
