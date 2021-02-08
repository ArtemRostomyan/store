<template>
  <div id="Catalog-product">
    
    <vhedaerComponent
      :cardData="basket"/>
    <vpreloaderComponent
      v-if="preloader"
      class="preloader-comp"/>
    <vmultiSelect
      class="vmultiSelect"
      @createNewCatalog="createNewCatalog"
      v-if="!preloader"
      />

      <transition-group 
        name="list" 
        tag="div"
        class="catalog-products"
        v-if="!preloader">
        <vcardProduct
                  v-for="product in filteredCatalog" 
                  :key="product.id"
                  @addInBasket="addInBasket"
                  :product_data="product"
                  ></vcardProduct>
      </transition-group>

    <vohNoComponent
      v-if="ohNo"/>
  </div>
</template>

<script>


import {mapActions, mapGetters} from 'vuex'

import vhedaerComponent from '../header-basket/v-header'
import vcardProduct from '../catalog/v-card-product'
import vpreloaderComponent from '../other/v-preloader'
import vohNoComponent from '../other/v-oh-no-component'
import vmultiSelect from '../multi-select/v-multi-select'

export default{
  name: 'Catalog-product',
  components: {
    vcardProduct,
    vpreloaderComponent,
    vhedaerComponent,
    vohNoComponent,
    vmultiSelect
  },
  data(){
    return{
    }
  },
  computed:{
    ...mapGetters([
      'PRODUCTS',
      'preloader',
      'basket',
      'ohNo',
      'newCatalog'
    ]),
    filteredCatalog(){
      if(this.newCatalog.length){
        return this.newCatalog
      } else{
        return this.PRODUCTS
      }
    }
  },
  methods:{
    ...mapActions([
      'get_products_from_github',
      'add_in_basket',
      'togglePreloader'
    ]),
    addInBasket(data){
      this.add_in_basket(data)
    },
    createNewCatalog(){
      
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
  row-gap: 60px;
  column-gap: 45px;
}
.preloader-comp{
  margin-top: 25%;
}
.vmultiSelect{
  margin: 100px 0 0 35px;
}
</style>
