<template>
  <div id="OhNoComponent">
    <div class="OhNoComponent">
      <button
        class="OhNoComponent__btn"
        @click="removeOhNo">х</button>
      <h2>Внимание!</h2>
      <p>Данный проект не является реальным магазниом</p>
      <p>Проект собран с помощью npm run build, если хотите посмотреть на реализацию <span>Vue</span> компонентов - переходите на мой гитхаб-репозиторий</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default{
  name: 'OhNoComponent',
  data(){
    return{}
  },
  methods:{
    ...mapActions([
      'OH_NO_TOGGLE'
    ]),
    removeOhNo(){
      this.OH_NO_TOGGLE()
    }
  },
  computed: {
    ...mapGetters([
      'ohNoText'
    ])
  }
}
</script>

<style lang="scss">
.OhNoComponent{
  z-index: 20;
  position: fixed;
  width: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 50px;
  border: 4px solid rgb(243, 243, 243);
  border-radius: 7px;
  background-color: rgb(192, 192, 192);
  &__btn{
    cursor: pointer;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    position: absolute;
    font-weight: 600;
    color: #fff;
    font-size: 45px;
    right: 5px;
    top: 5px;
  }
  p{
    font-weight: 600;
    span{
      font-weight: 300;
      color: rgb(77, 212, 77);
    }
  }
}
@media (max-width:560px) {
  .OhNoComponent{
    width: 70%;
    padding: 20px;
    &__btn{
      top: -8px;
    }
  }
}
</style>
