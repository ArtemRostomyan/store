<template>
  <div id="Catalog-product">
    <vHedaerComponent
      :product_data="basket"/>
    <vPreloaderComponent
      v-if="preloader"
      class="preloader-comp"/>
    <div class="iput-box">
      <vMultiSelect
        class="vMultiSelect"
        v-if="!preloader"
        />
      <vRangeSortingPrice
        class="vRangeSortingPrice"
        v-if="!preloader"/>
    </div>
    <transition-group 
      name="list" 
      tag="div"
      class="catalog-products"
      v-if="!preloader">
      <vCardProduct
                v-for="product in filteredCatalog" 
                :key="product.id"
                :product_data="product"
                @addInBasket="addInBasket"
                @updateSeparateCardProduct="updateSeparateCardProduct(product)"
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
    updateSeparateCardProduct(product){
      this.$router.push( {name: 'separate-product', query: {'product': product.id}, params:{product_data: product} })
    }
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
