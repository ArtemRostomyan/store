<template>
  <div id="Catalog-product">
    <hedaerComponent
      :cardData="basket"/>
    <preloaderComponent/>
    <div 
        class="catalog-products"
        v-if="preloader == false">
      <cardProduct
                v-for="product in products" 
                :key="product.id"
                @addInBasket="addInBasket"
                :product_data="product"
                ></cardProduct>
    </div>
    <ohNoComponent
      v-if="ohNo"/>
  </div>
</template>

<script>


import {mapActions, mapGetters} from 'vuex'

import hedaerComponent from '../header-basket/v-header'
import cardProduct from '../catalog/v-card-product'
import preloaderComponent from '../other/v-preloader'
import ohNoComponent from '../other/v-oh-no-component'

export default{
  name: 'Catalog-product',
  components: {
    cardProduct,
    preloaderComponent,
    hedaerComponent,
    ohNoComponent
  },
  data(){
    return{
      
    }
  },
  computed:{
    ...mapGetters([
      'products',
      'preloader',
      'basket',
      'ohNo'
    ])
  },
  methods:{
    ...mapActions([
      'get_products_from_github',
      'add_in_basket',
      'togglePreloader'

    ]),
    addInBasket(data){
      this.add_in_basket(data)
    }
  },
  mounted() {
    this.get_products_from_github()
    .then(
      this.togglePreloader()
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
@media(max-width: 420px){
  .catalog-products {
    &__product-card{
      margin: 10px;
    }
}
}
</style>
