<template>
  <div id="Header">
    <div class="header-box"
      >
      <div 
        class="image-box header-box__image-box"
        @click="toggleBasketVisibility"
        >
        <img 
          class="image-box__image"
          src="../../assets/cart.svg" 
          alt="">
          <div 
            class="quanity-box image-box__quanity-box"
            v-if="basket_length != 0">
          <span
            class="quanity-box__text">{{basket_length}}</span>
        </div>
      </div>
        <vbasket
          :cardData="cardData"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import vbasket from './v-basket'



export default{
  props: {
    cardData: {
        type: Array,
        default(){
          return []
        }
    },
  },
  name:'Header',
  components: {
    vbasket
  },
  data(){
    return{
    }
  },
  methods:{
    ...mapActions([
      'toggleBasketVisibility'
    ])
  },
  computed: {
    ...mapGetters([
      'basket_length'
    ])
  }
}
</script>

<style lang="scss">
#Header{
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
.header-box{
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
  &__btn{
    text-align: right;
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

@media(min-height: 736px){
  .products-box{
    height: 560px;
  }
  .header-box{
    &__products-box{
      bottom: -545px;
    }
  }
}
@media(max-width: 880px){
  .products-box{
    width: 100%;
  }
  .header-box{
    &__products-box{
      right: 0px;
    }
  }
}
</style>
