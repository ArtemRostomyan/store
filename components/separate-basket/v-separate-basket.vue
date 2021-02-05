<template>
  <div id="Separate-basket">
    <div class="separate-basket">
      <div class="title-box">
        <h1
          class="separate-basket__title">Оформление заказа</h1>
      </div> 
        <SeparateBasketItemProduct
                v-show="queueView == 1"
                @removeItemFromBasket="removeItemFromBasket(index)"
                v-for="(card, index) in basket"
                :key="card.id"
                :cardItem="card"
              />
        <p
          class="separate-basket__text"
          v-if="queueView == 1">Общая сумма : {{(TOTAL_SUM).toLocaleString()}} ₽</p>
        <Initails
          @queueBack="queueBack"
          @queueNext="queueNext"
          :errorTexts='errorTexts'
          v-show="queueView == 2"></Initails>
        <Location
          @queueBack="queueBack"
          @queueNext="queueNext"
          :errorTexts='errorTexts'
          v-show="queueView == 3"></Location>
        <Address
          @queueBack="queueBack"
          @queueNext="queueNext"
          :errorTexts='errorTexts'
          v-show="queueView == 4"></Address>
    </div>
    <div class="separate-basket__btn-box">
      <router-link 
        class="btn-box__btn separate-basket__btn"
        v-if="queueView == 1"
        :to="{name: 'catalog'}">Вернуться к редактированию</router-link>
      <button
        v-if="queueView == 1"
        class="btn-box__btn separate-basket__btn"
        @click="queueNext">Далее</button>
      
    </div>
    <OhNoComponent
      v-if="ohNo"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import SeparateBasketItemProduct from './v-separate-basket-item-product'
import Initails from './deliveryComponents/v-initials'
import Location from './deliveryComponents/v-location'
import Address from './deliveryComponents/v-address'
import OhNoComponent from '../other/v-oh-no-component'

export default{
  name: 'Separate-basket',
  props:{
  },
  components: {
    SeparateBasketItemProduct,
    Initails,
    Location,
    Address,
    OhNoComponent
  },
  data(){
    return{
      queueView: 1,
      errorTexts: {
        requiredText: 'Пожалуйста, заполните поле',
        numericText: 'В поле должны содержаться только цифры',
        alphaText: 'Поле может содержать только буквы кириллицы',
        indexText: 'Индекс содержит 6 цифр'
      }
    }
  },
  methods:{
    ...mapActions([
      'deleteItemFromBasket'
    ]),
    removeItemFromBasket(index){
      this.deleteItemFromBasket(index)
    },
    queueNext(){
      if(this.queueView < 4){
        this.queueView++
      }
    },
    queueBack(){
      if(this.queueView > 1){
        this.queueView--
      }
    }
  },
  computed: {
    ...mapGetters([
      'basket',
      'ohNo',
      'TOTAL_SUM'
    ])
  }
}
</script>

<style lang="scss">
#Separate-basket{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.separate-basket{
  border-radius: 10px;
  min-height: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #cccbcb;
  &__title{
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
  &__btn{
    margin: 9px 5px 0 0;
    font-size: 20px;
    cursor: pointer;
    &:hover{
      background-color: #3a6154;
    }
    &:active{
      opacity: 0.8;
    }
    &:last-child{
      margin-right: 0px;
    }
  }
  &__btn-box{
    margin-top: 10px;
    display: flex;
  }
  &__text{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    font-weight: 600;
  }
}
@media(max-width: 380px){
    .separate-basket{
      &__title{
        font-size: 26px;
      }
  }
} 
</style>
