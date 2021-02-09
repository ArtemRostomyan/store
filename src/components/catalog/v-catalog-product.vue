<template>
  <div id="Catalog-product">
    <vHedaerComponent
      :cardData="basket"/>
    <vPreloaderComponent
      v-if="preloader"
      class="preloader-comp"/>
    <div class="iput-box">
      <vMultiSelect
        class="vMultiSelect"
        v-if="!preloader"
        />
      <vRangeSortingPrice/>
    </div>
    <transition-group 
      name="list" 
      tag="div"
      class="catalog-products"
      v-if="!preloader">
      <vCardProduct
                v-for="product in filteredCatalog" 
                :key="product.id"
                @addInBasket="addInBasket"
                :product_data="product"
                ></vCardProduct>
    </transition-group>
    <vOhNoComponent
      v-if="ohNo"/>
  </div>
</template>

<script>


import {mapActions, mapGetters} from 'vuex'

import vHedaerComponent from '../header-basket/v-header'
import vCardProduct from '../catalog/v-card-product'
import vPreloaderComponent from '../other/v-preloader'
import vOhNoComponent from '../other/v-oh-no-component'
import vMultiSelect from '../catalog/multi-select/v-multi-select'
import vRangeSortingPrice from '../catalog/range-input/v-range-sorting-price'

export default{
  name: 'Catalog-product',
  components: {
    vCardProduct,
    vPreloaderComponent,
    vHedaerComponent,
    vOhNoComponent,
    vMultiSelect,
    vRangeSortingPrice
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
      'newCatalog',
      'DONTRESULT'
    ]),
    filteredCatalog(){
      if(this.newCatalog.length){
        return this.newCatalog
      } else{
          this.INCREMENT_DONT_RESULT()
          return this.PRODUCTS
      }
    }
  },
  methods:{
    ...mapActions([
      'get_products_from_github',
      'add_in_basket',
      'togglePreloader',
      'startProcess',
      'INCREMENT_DONT_RESULT'
    ]),
    addInBasket(data){
      this.add_in_basket(data)
    },

  },
  mounted() {
    this.get_products_from_github()
    .then(
      this.togglePreloader()
    )
    .then(
      this.startProcess()
    )
    .then(
      this.INCREMENT_DONT_RESULT()
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
.iput-box{
  margin: 100px 0 0 0;
  display: flex;
  justify-content: space-around;
}
</style>
