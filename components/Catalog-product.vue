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
                v-for="product in products" 
                :key="product.id"
                @addInBasket="addInBasket"
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
      'products'
    ])
  },
  methods:{
    ...mapActions([
      'get_products_from_github',
      'add_in_basket'

    ]),
    addInBasket(data){
      this.add_in_basket(data)
    }
  },
  mounted() {
    this.get_products_from_github()
    .then(
      this.preloader = !this.preloader
    )
  }
  
}
</script>

<style lang="scss">
.catalog-products{
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &__product-card{
    margin: 10px 30px;
  }
}

</style>
