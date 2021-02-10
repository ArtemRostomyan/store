<template>
  <div id="v-separate-card-product">
    <vHedaerComponent
      :product_data="basket"/>
    <div 
      class="separate-product"
      :title="product_data.description">
        <div class="separate-product__image-box">
          <img 
          class="separate-product__image"
          :src="product_data.image"
          alt=""
          >
        </div>
        <div class="content-box">
          <h2
              class="info-box__title">Информация о товаре</h2>
          <div class="info-box">
            <div class="item-box">
              <p>Имя</p>
              <p
                class="separate-product__name">{{product_data.name}} {{ processor_complectation }}</p>
            </div>
            
            <div class="item-box">
              <p>Тип</p>
              <p>{{product_data.description}}</p>
            </div>
            <div class="item-box">
              <p>Производитель</p>
              <p>{{product_data.maker}}</p>
            </div>
            <div 
              class="item-box"
              v-if="product_data.type == 'processor'">
              <p>Комплектация процессора</p>
              <p
                class="separate-product__name">{{ processor_complectation }}</p>
            </div>
          </div>
          <div class="button-box">
            <button
                class="separate-product__btn btn"
                @click="add_in_basket(product_data)">В корзину</button>
            <img 
              class="separate-product__heart"
              src="../../assets/heart.svg" 
              alt=""
              >
          </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import vHedaerComponent from '../header-basket/v-header'

export default{
  name: 'v-separate-card-product',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components:{
    vHedaerComponent
  },
  data(){
    return{
      rub: '₽',
      preloader: true
    }
  },
  methods:{
    ...mapActions([
      'add_in_basket'
    ]),
    addInBasket(product_data){
      this.add_in_basket(product_data)
    },
  },
  computed: {
    ...mapGetters([
      'basket'
    ]),
    processor_complectation(){
      if(this.product_data.type === "processor"){
        if(this.product_data.box){
          return 'BOX'
        } else{
          return 'OEM'
        }
      } else{
         return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.separate-product {
		margin: 0 auto;
    margin-top: 100px;
    height: 50%;
    display: flex;
    justify-content: space-between;
		&__image {
      width: 260px;
      margin: 0 auto;
      padding: 10px;
      background: #fff;
      border-radius: 20px;
		}
		&__heart {
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
    &__btn{
      font-size: 15px;
    }
}
.button-box{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  padding: 10px;
  border-radius: 23px;
}
.item-box{
  display: flex;
  justify-content: space-between;
  width: 420px;
  color: rgba(255, 255, 255, 0.644);
  font-size: 19px;
}
.info-box{
  &__title{
    text-align: center;
    margin-bottom: 40px;
  }
}
.content-box{
  min-height: 270px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media(max-width: 980px){
  .separate-product{
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__image-box{
      display: flex;
      justify-content: center;
    }
    &__image{
      width: 250px;
    }
  }
  .item-box{
    width: 100%;
    display: block;
    &:nth-child(2n){
      border-radius: 9px;
      padding: 3px;
      background-color: rgba(255, 255, 255, 0.151);
      color: rgba(255, 255, 255, 0.842);
    }
  }
  .info-box{
    &__title{
      font-size: 24px;
      color: rgba(0, 0, 0, 0.459);
      margin: 0px;
    }
    
  }
  .button-box{
    margin-top: 10px;
  }
}
@media(max-width: 490px){
.item-box{
  width: 290px;
}
}
</style>
