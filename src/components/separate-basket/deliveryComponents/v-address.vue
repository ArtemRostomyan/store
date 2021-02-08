<template>
  <div 
    id='Address'
    @keyup.enter="toggleOhNo">
      <div class="delivery address-box">
        <label 
          class="delivery__label"
          for="address">Адрес доставки</label>
        <input
          class="delivery__input"
          @blur="$v.address.$touch()"
          :class="{'delivery-error': $v.address.$error}"
          v-model.trim="address"
          autocomplete="off"
          id="address" 
          type="text">
        <p
          class="delivery-error__text"
          v-if="!$v.address.required"
          :class="{'delivery-error__text-active': $v.address.$error}">{{errorTexts.requiredText}}</p>
        <p
          class="delivery-error__text"
          v-if="!$v.address.alphaNum"
          :class="{'delivery-error__text-active': $v.address.$error}">{{errorTexts.alphaNumText}}</p>
        <label 
          class="delivery__label"
          for="index">Индекс</label>
        <input
          class="delivery__input"
          @blur="$v.index.$touch()"
          :class="{'delivery-error': $v.index.$error}"
          v-model.trim="index"
          autocomplete="off"
          id="index" 
          type="number">
        <p
          class="delivery-error__text"
          v-if="!$v.index.required"
          :class="{'delivery-error__text-active': $v.index.$error}">{{errorTexts.requiredText}}</p>
        <p
          class="delivery-error__text"
          v-if="!$v.index.numeric"
          :class="{'delivery-error__text-active': $v.index.$error}">{{errorTexts.numericText}}</p>
        <p
          class="delivery-error__text"
          v-if="!$v.index.minLength || !$v.index.maxLength"
          :class="{'delivery-error__text-active': $v.index.$error}">{{errorTexts.indexText}}</p>
      </div>
      <button
          class="btn-box__btn separate-basket__btn"
          @click="queueBack"
          >Назад</button>
      <button
          class="btn-box__btn separate-basket__btn"
          :class="{'disabledBtn' : disabledBtnLast}"
          :disabled="disabledBtnLast"
          @click="toggleOhNo">Подать заявку</button>
      <router-link 
        :to="{name: 'catalog'}"
        class=" btn-box__btn separate-basket__btn"
        v-if="goToHome">Домой</router-link>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import { required, numeric, minLength, maxLength, helpers } from 'vuelidate/lib/validators'
const alphaNum = helpers.regex('alphaNum', /^[а-яёА-ЯЁ0-9_-]*$/)

export default{
  name: 'Address',
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
      address:'',
      index: '',
      goToHome: false
    }
  },
  methods:{
    ...mapActions([
      'ohNotoggle'
    ]),
    queueBack(){
      this.$emit('queueBack')
    },
    toggleOhNo(){
      if(!this.disabledBtnLast){
        this.ohNotoggle()
        this.goToHome = true
      }
    }
  },
  computed: {
    ...mapGetters([
      'ohNoText'
    ]),
    disabledBtnLast(){
      return  this.$v.address.$invalid ||
              this.$v.index.$invalid
    },
  },
  validations: {
    address: {
      required,
      alphaNum
    },
    index: {
      required,
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(6)
    }
  }
}
</script>

<style>
#Address{
  display: flex; 
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
}
</style>
