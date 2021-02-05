<template>
  <div 
    id="Location"
    @keyup.enter="queueNext">
        <div class="delivery location-box">
          <label 
            class="delivery__label"
            for="country">Страна</label>
          <input
            class="delivery__input"
            value="Россия"
            autocomplete="off"
            disabled="disabled"
            id="country" 
            type="text">
          <label 
            class="delivery__label"
            for="city">Город</label>
          <input
            class="delivery__input"
            @blur="$v.city.$touch()"
            :class="{'delivery-error': $v.city.$error}"
            v-model.trim="city"
            autocomplete="off"
            id="city" 
            type="text">
          <p
            class="delivery-error__text"
            v-if="!$v.city.required"
            :class="{'delivery-error__text-active': $v.city.$error}">{{errorTexts.requiredText}}</p>
          <p
            class="delivery-error__text"
            v-if="!$v.city.alpha"
            :class="{'delivery-error__text-active': $v.city.$error}">{{errorTexts.alphaText}}</p>
        </div>
        <button
            class="btn-box__btn separate-basket__btn"
            @click="queueBack"
            >Назад</button>
        <button
          class="btn-box__btn separate-basket__btn"
          :class="{'disabledBtn' : disabledBtn2}"
          :disabled="disabledBtn2"
          type="button"
          @click="queueNext">Далее</button>
  </div>
</template>

<script>
import { required, helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[а-яёА-ЯЁ]*$/)

export default{
  name: 'Location',
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
      city: ''
    }

  },
  methods:{
    queueNext(){
      if(!this.disabledBtn2){
        this.$emit('queueNext')
      }
    }, 
    queueBack(){
      this.$emit('queueBack')
    }
  },
  validations: {
    city: {
      required,
      alpha
    }
  },
  computed: {
    disabledBtn2(){
      return  this.$v.city.$invalid
    },
  }
  
}
</script>

<style lang="scss">
#Location{
  display: flex; 
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
}

</style>
