<template>
  <div 
    id="SeparateBasketItemProduct"
    class="basket-item-box">
    <div class="image-box">
      <img 
        class="image-box__image"
        :src="cardItem.image" 
        @click="updateSeparateCardProduct"
        alt="">
    </div>
    <div
      class="info-box"
      @click="updateSeparateCardProduct">
        <p 
          class="info-box__text">{{cardItem.name}}</p>
        <p
          class="info-box__subtext">{{cardItem.description}}</p>
    </div>
    <div 
      class="price-box">
      <button
        class="btn price-box__button"
        @click="incrementQuantity">+</button>
      <span
        class="price-box__subtext"
        >{{cardItem.quantity}}</span>
      <button
        class="btn price-box__button"
        @click="decrementQuantity">-</button>
      <p
        class="price-box__text">{{(cardItem.price * cardItem.quantity).toLocaleString()}}  ₽</p>
    </div>
    <div class="button-box">
      <button
        class="btn button-box__button"
        @click="removeItemFromBasket">{{REMOVE_ITEM_TEXT}}</button>
    </div> 
  </div>
</template>

<script> 
import {mapGetters} from 'vuex'

export default{
  name: 'SeparateBasketItemProduct',
  props: {
    cardItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{}
  },
  methods:{
    incrementQuantity(){
      if(this.cardItem.quantity < 10){
        this.cardItem.quantity++
      }else{
        alert('Доступно всего 10 товаров одного вида')
      }
    },
    decrementQuantity(){
      if(this.cardItem.quantity > 1){
         this.cardItem.quantity--
      } else{
        this.removeItemFromBasket()
        this.cardItem.quantity = undefined
      }
    },
    removeItemFromBasket(){
      this.cardItem.quantity = undefined
      this.$emit('removeItemFromBasket')
    },
    updateSeparateCardProduct(){
      this.$emit('updateSeparateCardProduct')
    }
  },
  computed: {
    ...mapGetters([
      'REMOVE_ITEM_TEXT'
    ])
  }
}
</script>

<style lang="scss" scoped>
.basket-item-box{
  display: flex;
  justify-content: space-between;
}
.basket-item-box{
  padding: 5px;
  background-color: #fff;
  margin: 0px 0px 12px 0px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &:last-child{
    margin-bottom: 0px;
  }
}
.image-box{
  &__image{
    width: 100px;
  }
  &:active{
    transform: none;
  }
}
.info-box{
  &__text{
    text-align: center;
    font-weight: 600;
  }
  &__subtext{
    text-align: center;
    font-weight: 400;
  }
}
.price-box{
  text-align: center;
  &__button{
    font-weight: 600;
    font-size: 18px;
    border-radius: 8px;
    padding: 3px 10px;
    margin: 2px;
    &:hover{
      font-weight: 600;
      font-size: 18px;
      border-radius: 8px;
      padding: 3px 10px;
    }
    &:active{
      font-size: 18px;
    }
  }
  &__text{
    margin-top: 5px;
  }
}
.button-box{
  width: 108px;
  display: flex;
  justify-content: center;
  &__button{
    &:hover{
      border: 2px solid rgb(219, 27, 27);
      font-weight: 600;
      font-size: 18px;
      border-radius: 3px;
      padding: 7px 12px;
      background-color: rgb(219, 27, 27);
      color: #fff;
    }
    &:active{
      font-size: 18px;
      opacity: 0.8;
    }
  }
}

@media(max-width: 880px){
  .basket-item-box {
    display: flex;
    flex-direction: column;
    margin: 0 0 8px 0;
  }
  .image-box {
      &__image {
        width: 85px;
      }
  }
  .info-box {

      &__text {
        font-size: 16px;
      }
  }
  .price-box {
      &__subtext {
        font-size: 13px;
      }
  }
}
</style>
