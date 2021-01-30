<template>
  <div id="Basket-item-product">
    <div class="basket-item-box">
      <div 
        class="image-box">
        <img 
          class="image-box__image"
          :src="cardItem.image" 
          alt="">
      </div>
      <div
        class="info-box">
          <p 
            class="info-box__text">{{cardItem.name}}</p>
          <p
            class="info-box__subtext">{{cardItem.description}}</p>
      </div>
      <div 
        class="price-box">
        <button
          class="btn price-box__button">+</button>
        <span
          class="price-box__subtext"
          >1</span>
        <button
         class="btn price-box__button">-</button>
         <p
          class="price-box__text">{{cardItem.price}} ₽</p>
      </div>
      <div class="button-box">
        <button
        class="btn button-box__button"
        @click="removeItemFromBasket(index)">{{removeItemText}}</button>
      </div>  
    </div>
  </div>
</template>

<script>

export default{
  props: {
    cardItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  name: 'Basket-item-product',
  data(){
    return{
      removeItemText: 'Удалить'
    }
  },
  methods:{
    asdads(){
      console.log(this.cardItem)
    },
    removeItemFromBasket(){
      this.$emit('removeItemFromBasket')
    }
  }
}
</script>

<style lang="scss" scoped>
.basket-item-box{
  padding: 5px  15px;
  background-color: #fff;
  margin: 0px 0px 4px 0px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.image-box{
  &__image{
    width: 100px;
  }
}
.info-box{
  &__text{
    font-weight: 600;
  }
  &__subtext{
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
      padding: 3px 10px;
      background-color: rgb(219, 27, 27);
      color: #fff;
    }
    &:active{
      font-size: 18px;
      opacity: 0.8;
    }
  }
}
</style>
