<template>
  <div id="Separate-basket">
    <div class="separate-basket">
      <div class="title-box">
        <h1
          class="separate-basket__title">Оформление заказа</h1>
      </div> 
        <vseparateBasketItemProduct
                v-show="queueView == 1"
                @removeItemFromBasket="removeItemFromBasket(index)"
                v-for="(card, index) in basket"
                :key="card.id"
                :cardItem="card"
              />
        <p
          class="separate-basket__text"
          v-if="queueView == 1">Общая сумма : {{(TOTAL_SUM).toLocaleString()}} ₽</p>
        <vinitails
          @queueBack="queueBack"
          @queueNext="queueNext"
          :errorTexts='errorTexts'
          v-show="queueView == 2"></vinitails>
        <vlocation
          @queueBack="queueBack"
          @queueNext="queueNext"
          :errorTexts='errorTexts'
          v-show="queueView == 3"></vlocation>
        <vaddress
          @queueBack="queueBack"
          @queueNext="queueNext"
          :errorTexts='errorTexts'
          v-show="queueView == 4"></vaddress>
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
    <vohNoComponent
      v-if="ohNo"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import vseparateBasketItemProduct from './v-separate-basket-item-product'
import vinitails from './deliveryComponents/v-initials'
import vlocation from './deliveryComponents/v-location'
import vaddress from './deliveryComponents/v-address'
import vohNoComponent from '../other/v-oh-no-component'

export default{
  name: 'Separate-basket',
  props:{
  },
  components: {
    vseparateBasketItemProduct,
    vinitails,
    vlocation,
    vaddress,
    vohNoComponent
  },
  data(){
    return{
      queueView: 1,
      errorTexts: {
        requiredText: 'Пожалуйста, заполните поле',
        numericText: 'В поле должны содержаться только цифры',
        alphaText: 'Поле может содержать только буквы кириллицы',
        indexText: 'Индекс содержит 6 цифр',
        alphaNumText: 'Только буквы кириллицы и цифры, без пробелов'
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
