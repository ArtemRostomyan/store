<template>
  <div id="Basket">
      <transition name="slide-fade">
        <div 
          class="products-box header-box__products-box"
          v-show="BASKET_VISIBLITY">
          <h2 class="products-box__text" v-if="BASKET_LENGTH == 0">Корзина пуста</h2>
          
            <div class="btn-box">
                <p
                  class="btn-box__text"
                  v-if="BASKET_LENGTH >=1">Общая сумма: {{(TOTAL_SUM).toLocaleString()}} ₽</p>
                <router-link
                   :to="{name: 'basket'}"
                   class="btn-box__btn" v-if="BASKET_LENGTH >=1">
                   Перейти к оформлению
                </router-link>             
                
            </div>
          
              <vbasketItemProduct
                class="products-box__item"
                v-for="(card, index) in product_data"
                :key="card.id"
                :cardItem="card"
                @removeItemFromBasket="removeItemFromBasket(index)"
              />
        </div>
      </transition>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import vbasketItemProduct from './v-basket-item-product'
export default{
  name: 'Basket',
  props:{
    product_data: {
        type: Array,
        default(){
          return []
        }
    },
  },
  components: {
    vbasketItemProduct
  },
  data(){
    return{}
  },
  methods:{
    ...mapActions([
      'DELETE_ITEM_FROM_BASKET'
    ]),
    removeItemFromBasket(index){
      this.DELETE_ITEM_FROM_BASKET(index)
    },

  },
  computed: {
    ...mapGetters([
      'BASKET_VISIBLITY',
      'BASKET_LENGTH',
      'TOTAL_SUM'
    ])
  }
}
</script>

<style lang="scss">
.btn-box{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  &__btn{
    border-radius: 6px;
    padding: 10px 15px;
    margin: 0 0 2px 0;
    font-weight: 700;
    color: #fff;
    background-color: rgb(219, 27, 27);
    border: 2px solid rgb(219, 27, 27);
    transition: 0s;
    &:hover{
      color: #fff;
      background-color: #54a78c;
      border: 2px solid #54a78c;
    }
  }
  &__text{
    color: rgb(255, 255, 255);
    font-size: 19px;
    font-weight: 600;
  }
}
@media(max-width: 680px){
  .btn-box{
    margin-bottom: 5px;
    &__text{
      font-size: 12px;
    }
    &__btn{
      padding: 5px 7px;
      font-size: 12px;
    }
  }
}
@media(max-width: 480px){
  .btn-box{
    &__btn{
      font-size: 12px;
    }
  }
}

</style>
