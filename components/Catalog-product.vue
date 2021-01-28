<template>
  <div id="Catalog-product">
    <div 
      class="cssload-thecube"
      v-if="preloader">
      <div class="cssload-cube cssload-c1"></div>
      <div class="cssload-cube cssload-c2"></div>
      <div class="cssload-cube cssload-c4"></div>
      <div class="cssload-cube cssload-c3"></div>
    </div>
    <div 
        class="catalog-products"
        v-else>
      <cardProduct
                v-for="product in PRODUCTS" 
                :key="product.id"
                :product_data="product"></cardProduct>
    </div>
    
  </div>
</template>

<script>
import cardProduct from './Card-product'
import {mapActions, mapGetters} from 'vuex'

export default{
  name: 'Catalog-product',
  components: {
    cardProduct
  },
  data(){
    return{
      preloader: true
    }
  },
  computed:{
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_GITHUB'
    ]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_GITHUB()
    .then(
      this.preloader = !this.preloader
    )
  }
  
}
</script>

<style lang="scss">
.catalog-products{
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &__product-card{
    margin: 10px 30px;
  }
}

</style>
