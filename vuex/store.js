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
   },
   mutations: {
      set_product_to_state: (state, server) => {
         state.server = server;
      },
      set_card: (state, product) => {
         state.basket.push(product),
         state.basket_length = state.basket.length
      },
      toggleBasketVisibility: (state) =>{
         state.basketVisibility = !state.basketVisibility
      },
      removeItemFromBasket: (state, index) => {
         state.basket.splice(index, 1)
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
      removeItemFromBasket({commit}, index){
         commit('removeItemFromBasket', index)
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
      }
   }
});

export default store;