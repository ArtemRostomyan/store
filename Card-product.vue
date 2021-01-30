<template>
  <div id="Card-product">
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
        <div class="catalog-products__info-box">
          <p
            class="product-card__name">{{product_data.name}}</p>
          <p
            class="product-card__price">{{product_data.price}} {{rub}}</p>
        </div>
        <div class="catalog-products__button-box">
          <button
              class="product-card__btn btn"
              @click="add_in_basket">В корзину</button>
          <img 
            class="product-card__heart"
            src="../assets/heart.svg" 
            alt=""
            >
        </div>
    </div>
  </div>
</template>

<script>

export default{
  name: 'Card-product',
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
      preloader: true
    }
  },
  methods:{
    add_in_basket(){
      this.$emit('addInBasket', this.product_data)
    }
  }
}
</script>

<style lang="scss">
.product-card{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  height: 320px;
  width: 250px;
  background-color: #fff;
  border-radius: 8px;
  transition: 0.15s;
  border: 5px solid #438670;
  &:hover{
    box-shadow: 0px 0px 10px 1px #000000 ;
    border: 5px solid #54a78c;
  }
  &__image{
    width: 160px;
    margin: 0 auto;
    max-height: 205px;
    cursor: pointer;
  }
  &__name{
    font-size: 19px;
    font-weight: 700;
    color: #000;
    cursor: pointer;
  }
  &__heart{
    box-sizing: content-box;
    padding: 3px;
    border-radius: 40%;
    bottom: 16px;
    width: 30px;
    cursor: pointer;

    &:hover{
      background-color: rgba(#54a78c, 0.308);
    }
    &:active{
      width: 25px;
      bottom: 18px;
      left: 152px;
    }
  }
}
.catalog-products{
  &__image-box{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__button-box{
    display: flex;
    justify-content: space-between;
  }
}
</style>
