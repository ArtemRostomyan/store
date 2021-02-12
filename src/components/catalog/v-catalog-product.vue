<template>
  <div id="Catalog-product">
    <vHedaerComponent
      :product_data="BASKET"/>
    <vPreloaderComponent
      v-if="PRELOADER"
      class="preloader-comp"/>
    <div class="iput-box">
      <vMultiSelect
        class="vMultiSelect"
        v-if="!PRELOADER"
        />
      <vRangeSortingPrice
        class="vRangeSortingPrice"
        v-if="!PRELOADER"/>
    </div>
    <transition-group 
      name="list" 
      tag="div"
      class="catalog-products"
      v-if="!PRELOADER">
      <vCardProduct
                v-for="product in filteredCatalog" 
                :key="product.id"
                :product_data="product"
                @toggleFavorite="toggleFavorite(product)"
                @addInBasket="addInBasket"
                @updateSeparateCardProduct="updateSeparateCardProduct(product)"
                ></vCardProduct>
    </transition-group>
    <vOhNoComponent
      v-if="OH_NO"/>
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
      'PRELOADER',
      'BASKET',
      'OH_NO',
      'NEW_CATALOG',
      'DONTRESULT',
      'FAVORITES'
    ]),
    filteredCatalog(){
      if(this.NEW_CATALOG.length){
        return this.NEW_CATALOG
      } else{
          return this.PRODUCTS
      }
    }
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_GITHUB',
      'ADD_IN_BASKET',
      'TOGGLE_PRELOADER',
      'START_PROCESS',
      'INCREMENT_DONT_RESULT',
      'TOGGLE_FAVORITE',
      'START_FAVORITES'
    ]),
    addInBasket(product){
      this.ADD_IN_BASKET(product)
    },
    updateSeparateCardProduct(product){
      this.$router.push( {name: 'separate-product', query: {'product': product.id}, params:{product_data: product} })
    },
    toggleFavorite(product){
      this.TOGGLE_FAVORITE(product)
    },

  },
  mounted() {
    this.GET_PRODUCTS_FROM_GITHUB()
    .then(
      this.TOGGLE_PRELOADER()
    )
    .then(
      this.START_PROCESS()
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
@media(max-width: 560px){
  .iput-box{
    margin: 0px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
  }
  .vRangeSortingPrice{
    margin: 100px 0 20px 0;
  }
}
</style>
