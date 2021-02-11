<template>
  <div id="v-item-favorite-product">
    <div 
        class="product-card catalog-products__product-card"
        :title="product_data.description">
        <div class="catalog-products__image-box">
          <img 
          class="product-card__image"

          :src="product_data.image"
          alt=""
          >
        </div>
        <div 
          class="catalog-products__info-box"

          >
          <p
            class="product-card__name">{{product_data.name}}</p>
          <p
            class="product-card__price">{{(product_data.price).toLocaleString()}} {{rub}}</p>
        </div>
        <div class="catalog-products__button-box">
          <button
              class="product-card__btn btn"
              @click="add_in_basket">В корзину</button>
          <img 
            class="heart-img"
            :class="{'favorite' : product_data.favorite}"
            @click="toggleFavorite"
            src="../../../assets/heart.svg" 
            alt=""
            >
        </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'v-item-favorite-product',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return{
       rub: '₽',
    }
  },
  methods: {
    add_in_basket(){
      this.$emit('addInBasket', this.product_data)
    },
    updateSeparateCardProduct(){
      this.$emit('updateSeparateCardProduct')
    },
    toggleFavorite(){
      this.$emit('toggleFavorite', this.product_data)
    }
  }
}
</script>

<style scoped>

</style>
