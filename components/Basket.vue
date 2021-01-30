<template>
  <div id="Basket-product">
    <div class="basket-box">
      <div 
        class="image-box basket-box__image-box"
        @click="toggleBasketVisibility"
        >
        <img 
          class="image-box__image"
          src="../assets/cart.svg" 
          alt="">
          <div 
            class="quanity-box image-box__quanity-box"
            v-if="basket_length != 0">
          <span
            class="quanity-box__text">{{basket_length}}</span>
        </div>
      </div>
      <transition name="slide-fade">
        <div 
          class="products-box basket-box__products-box"
          v-show="basketVisibility">
          <h2
            class="products-box__text" v-if="basket_length == 0">Корзина пуста</h2>
              <basketItemProduct
                class="products-box__item"
                v-for="(card, index) in cardData"
                :key="card.id"
                :cardItem="card"
                @removeItemFromBasket="removeItemFromBasket(index)"
              />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import basketItemProduct from './Basket-item-product'

export default{
  props: {
    cardData: {
      name: {
        type: Array,
        default(){
          return []
        }
      }
    },
  },
  name:'Basket-product',
  components: {
    basketItemProduct
  },
  data(){
    return{
    }
  },
  methods:{
    ...mapActions([
      'toggleBasketVisibility',
      'deleteItemFromBasket'
    ]),
    removeItemFromBasket(index){
      this.deleteItemFromBasket(index)
    }
  },
  computed: {
    ...mapGetters([
      'basket_length',
      'basketVisibility',
    ])
  }
}
</script>

<style lang="scss" scoped>
#Basket-product{
  left: 0;
  top: 0;
  z-index: 2;
  border-radius: 0px 0px 10px 10px;
  background-color: #54a78c;
  height: 75px;
  width: 100%;
  position: fixed;
  box-shadow: 0 0 5px 3px #000;
}
.basket-box{
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &__products-box{
    position: absolute;
    right: 20px;
    bottom: -380px;
  }
}
.products-box{
  width: 90%;
  height: 400px;
  padding: 30px 10px 10px 20px;
  border: 3px solid #fff;
  border-radius: 20px;
  background-color: #3a6154;
  box-shadow: 0px 0px 5px 1px #000;
  overflow-y: scroll;
  &__text{
    color: #fff;
  }
}
.image-box{
  cursor: pointer;
  position: relative;
  &__image{
    cursor: pointer;
    width: 30px;
  }
  &__quanity-box{
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &:active{
    transform: rotate(-20deg);
  }
}
.quanity-box{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #54a78c;
  border-radius: 50%;
  width: 19px;
  box-shadow: 0px 0px 4px 2px #fff;
  color: #fff;
  height: 19px;
  &__text{
    font-size: 13px;
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
@media(min-height: 736px){
  .products-box{
    height: 560px;
  }
  .basket-box{
    &__products-box{
      bottom: -545px;
    }
  }
}
@media(max-width: 880px){
  .products-box{
    width: 100%;
  }
  .basket-box{
    &__products-box{
      right: 0px;
    }
  }
}
</style>
