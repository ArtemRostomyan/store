<template>
  <div id="v-range-sorting-price">
    <div class="inputs">
      <input
        class="inputs__input" 
        type="range"
        min="0"
        max="300000"
        step="1000"
        v-model.number="maxPrice"
        @change="setRangeMaxSliders(maxPrice, minPrice)"
      >
      <input 
        class="inputs__input"
        type="range"
        min="0"
        max="300000"
        step="1000"
        v-model.number="minPrice"
        @change="setRangeMinSliders(minPrice, maxPrice)"
        >
    </div> 
    <div class="input-subtext">
      <input 
        class="input-subtext__input"
        type="number"
        v-model.number="minPrice"
        @keyup="setRangeMinSliders(minPrice, maxPrice)"
        >
      <input 
        class="input-subtext__input"
        type="number"
        v-model.number="maxPrice"
        @keyup="setRangeMaxSliders(maxPrice, minPrice)"
        >
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default{
  name: 'v-range-sorting-price',
  data(){
    return{
      minPrice: 0,
      maxPrice: 300000
    }
  },
  methods: {
    ...mapActions([
      'SET_RANGE_MAX_SLIDERS',
      'SET_RANGE_MIN_SLIDERS'
    ]),
    setRangeMaxSliders(maxPrice, minPrice){
        if(this.minPrice > this.maxPrice){
          let i = this.maxPrice
          this.maxPrice  = this.minPrice
          this.minPrice = i
          return this.SET_RANGE_MAX_SLIDERS(maxPrice, minPrice)
        } else{
          return this.SET_RANGE_MAX_SLIDERS(maxPrice, minPrice)
        }
    },
    setRangeMinSliders(minPrice, maxPrice){
         if(this.minPrice > this.maxPrice){
            let i = this.maxPrice
            this.maxPrice  = this.minPrice
            this.minPrice = i
            return this.SET_RANGE_MIN_SLIDERS(minPrice, maxPrice)
         } else{
            return this.SET_RANGE_MIN_SLIDERS(minPrice, maxPrice)
         } 
    }
  },
  computed: {
    ...mapState([
      'MINPRICE',
      'MAXPRICE'
    ]),
  }
}
</script>

<style lang="scss" scoped>
.input-subtext{
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-weight: 500;
  width: 200px;
  &__input{
    width: 45%;
    border: none;
    border-radius: 5px;
    height: 25px;
    padding: 5px;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.inputs{
  margin-top: 5px;
  position: relative;
  height: 20px;
  width: 200px;
  &__input{
    position: absolute;
    left: 0;
    top: 0px;
    border-radius: 6px;
  }
}
input[type=range] {
  -webkit-appearance: none; 
  height: 10px;
  width: 200px;
  background-color: #3a6154; 
}

input[type=range]:focus {
  outline: none; 
}
input[type=range]::-ms-track {
  width: 200px;
  height: 10px;
  border-radius: 8px;
  cursor: pointer;
  background: transparent; 
  border-color: transparent;
  color: transparent;
}


input[type=range]::-webkit-slider-thumb {
  position: relative;
  z-index: 2;
  -webkit-appearance: none;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background:rgb(253, 253, 253);
  cursor: pointer;
}

</style>
