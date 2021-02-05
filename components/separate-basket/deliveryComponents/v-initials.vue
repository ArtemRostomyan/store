<template>
  <div 
    id="Initials"
    @keyup.enter="queueNext">
    
      <div 
        class="delivery initials-box">
        
        <label 
          class="delivery__label"
          for="name">Имя</label>
        <input
          class="delivery__input"
          @blur="$v.name.$touch()"
          :class="{'delivery-error': $v.name.$error}"
          v-model.trim="name"
          autocomplete="off"
          id="name" 
          type="text">
        <p
          class="delivery-error__text"
          v-if="!$v.name.required"
          :class="{'delivery-error__text-active': $v.name.$error}">{{errorTexts.requiredText}}</p>
        <p
          class="delivery-error__text"
          v-if="!$v.name.alpha"
          :class="{'delivery-error__text-active': $v.name.$error}">{{errorTexts.alphaText}}</p>
        <label 
          class="delivery__label"
          for="surname">Фамилия</label>
        <input
          class="delivery__input"
          @blur="$v.surname.$touch()"
          :class="{'delivery-error': $v.surname.$error}"
          v-model.trim="surname"
          autocomplete="off"
          id="surname" 
          type="text">
        <p
          class="delivery-error__text"
          v-if="!$v.surname.required"
          :class="{'delivery-error__text-active': $v.surname.$error}">{{errorTexts.requiredText}}</p>
        <p
          class="delivery-error__text"
          v-if="!$v.surname.alpha"
          :class="{'delivery-error__text-active': $v.surname.$error}">{{errorTexts.alphaText}}</p>
      </div>
      <button
          class="btn-box__btn separate-basket__btn"
          @click="queueBack"
          >Назад</button>
      <button
        class="btn-box__btn separate-basket__btn"
        :class="{'disabledBtn' : disabledBtn1}"
        :disabled="disabledBtn1"
        type="button"
        @click="queueNext">Далее</button>
  </div>
</template>

<script>
import { required, helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[а-яёА-ЯЁ]*$/)

export default{
  name: 'Initials',
  props: {
    errorTexts:{
      type: Object,
        default(){
          return {}
        }
    }
  },
  data(){
    return{
      name: '',
      surname: ''
    }
  },
  methods: {
    queueNext(){
      if(!this.disabledBtn1){
        this.$emit('queueNext')
      }
    },
    queueBack(){
      this.$emit('queueBack')
    }
  },
  computed: {
    disabledBtn1(){
      return  this.$v.name.$invalid ||
              this.$v.surname.$invalid
    },
  },
  validations: {
    name: {
      required,
      alpha
    },
    surname: {
      required,
      alpha
    }
  }
}
</script>

<style lang="scss">
#Initials{
  display: flex; 
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
}

.delivery{
  font-weight: 600;
  font-size: 19px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  width: 295px;
  min-height: 250px;
  background-color: #fff;
  &__input{
    height: 45px;
    border-radius: 7px;
    padding: 3px 5px;
    border: 3px solid #000;font-size: 19px;
    font-weight: 600; 
  }
  &__label{
    cursor: pointer;
  }
  &-error{
      border: 3px solid rgb(219, 27, 27);
    &__text{
      display: none;
      font-size: 15px;
      color: rgb(219, 27, 27);
      font-weight: 600;
      margin-bottom: 4px;
      &-active{
        display: block;
      }
    }
  }
}
.disabledBtn{
  cursor: default;
  opacity: 0.6;
  &:hover{
    
    cursor: default;
  }
}
@media(max-width: 480px){
  .delivery{
    width: 215px;
  }
}
@media(max-width: 310px){
  .delivery{
    width: 190px;
  }
}
</style>
