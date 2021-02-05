import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
   state: {
      server: [],
      basket: [],
      basket_length: 0,
      basketVisibility: false,
      quantity: 1,
      total_balance: 0,
      preloader: true,
      removeItemText: 'Удалить',
      ohNo: true,
      TOTAL_SUM: 0
      
   },
   mutations: {
      set_product_to_state: (state, server) => {
         state.server = server;
      },
      set_card: (state, product) => {
         if(!product.quantity){
            state.basket.push(product),
            state.basket_length = state.basket.length
         } else if(product.quantity < 10){
            product.quantity++
            state.quantity++
         } else{
            alert('Доступно всего 10 товаров одного вида')
         }
         
      },
      toggleBasketVisibility: (state) => {
         state.basketVisibility = !state.basketVisibility
      },
      deleteItemFromBasket: (state, index) => {
         state.basket.splice(index, 1)
         state.basket_length = state.basket.length
      },
      decrementQuantityInStore: (state, product, index) => {
         if(state.quantity > 1){
            state.quantity--
            product.quantity--
         } else{
           state.quantity = undefined
           state.basket.splice(index, 1)
           state.basket_length = state.basket.length
         }
      },
      incrementQuantityInStore: (state, product) => {
         if(product.quantity < 10){
            state.quantity++
            product.quantity++
            console.log(`state.quantity: ${state.quantity} product.quantity: ${product.quantity}`)
          }else{
            alert('Доступно всего 10 товаров одного вида')
          }
      },
      togglePreloader: (state) => {
         state.preloader = !state.preloader
      },
      ohNotoggle: (state) => {
         state.ohNo = !state.ohNo
      }
   },
   actions: {
      get_products_from_github({commit}){
        return axios("https://raw.githubusercontent.com/ArtemRostomyan/server/main/server.js",{
         method: "GET"
        })
        .then((server) =>{
           commit('set_product_to_state', server.data);
           return server;
        })
        .catch(() => {
           alert( 'ошибка')
        })
      },
      add_in_basket({commit}, product){
         commit('set_card', product)
      },
      toggleBasketVisibility({commit}){
         commit('toggleBasketVisibility')
      },
      deleteItemFromBasket({commit}, index ){
         commit('deleteItemFromBasket', index )
      },
      decrementQuantityInStore({commit}, index, product){
         commit('decrementQuantityInStore', index, product)
      },
      incrementQuantityInStore({commit}, product){
         commit('incrementQuantityInStore', product)
      },
      togglePreloader({commit}){
         commit('togglePreloader')
      },
      ohNotoggle({commit}){
         commit('ohNotoggle')
      }
   },
   getters: {
      products(states){
         return states.server 
      },
      basket_length(states){
         return states.basket_length
      },
      basketVisibility(states){
         return states.basketVisibility
      },
      basket(states){
         return states.basket
      },
      quantity(states){
         return states.quantity
      },
      total_balance(states){
         return states.total_balance
      },
      preloader(states){
         return states.preloader
      },
      removeItemText(states){
         return states.removeItemText
      },
      ohNo(states){
         return states.ohNo
      },
      TOTAL_SUM(states){
         let result = []
         if(states.basket.length){
            for(let item of states.basket){
            result.push(item.price * item.quantity)  
            }
            result = result.reduce(function(sum, el) {
              return sum + el
            })
            return result
          } else{
            return 0
          }
      }
   }
});

export default store;