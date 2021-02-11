<template>
  <div id="v-favorites-products">
    <vHeader/>
    <h1
      v-if="!FAVORITES.length">Здесь будут находиться избранные товары</h1>
    <h1
      v-if="FAVORITES.length">Избранные товары : </h1>
    <transition-group 
      name="list" 
      tag="div"
      class="catalog-products">
      <vItemFavoriteProduct
        class="vItemFavoriteProduct"
        v-for="(product, index) in FAVORITES"
        :key="index"
        :product_data="product"
        @toggleFavorite="toggleFavorite(product)"
        @addInBasket="addInBasket"
        @updateSeparateCardProduct="updateSeparateCardProduct(product)"/>
    </transition-group>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import vHeader from '../v-header'
import vItemFavoriteProduct from './v-item-favorite-product'

export default{
  name: 'v-favorites-products',
  components: {
    vHeader,
    vItemFavoriteProduct
  },
  data(){
    return{}
  },
  methods: {
    ...mapActions([
      'add_in_basket',
      'TOGGLEFAVORITE'
    ]),
    addInBasket(product){
      this.add_in_basket(product)
    },
    updateSeparateCardProduct(product){
      this.$router.push( {name: 'separate-product', query: {'product': product.id}, params:{product_data: product} })
    },
    toggleFavorite(product){
      product.favorite = !product.favorite
      this.TOGGLEFAVORITE(product)
    }
  },
  computed: {
    ...mapGetters([
      'FAVORITES'
    ])
  }
}
</script>

<style lang="scss">
#v-favorites-products{
  margin: 100px 0px 0px 0px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: italic;
  color: #fff;
}
</style>
