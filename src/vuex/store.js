import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import sortPriceAndCategories from './jsFunctions/sortPriceAndCategories'


Vue.use(Vuex);

let store = new Vuex.Store({
   state: {
      server: [],
      basket: [],
      newCatalog: [],
      favorites: [],
      basket_length: 0,
      basketVisibility: false,
      quantity: 1,
      total_balance: 0,
      preloader: true,
      removeItemText: 'Удалить',
      ohNo: true,
      TOTAL_SUM: 0,
      value: [],
      options: [
         {name: 'processor', value: 'процессор'},
         {name: 'motherboard', value: 'материнская плата'},
         {name: 'graphics-card', value: 'видеокарта'},
       ],
      MINPRICE: 0,
      MAXPRICE: 300000,
      DONTRESULT: 0
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
          }else{
            alert('Доступно всего 10 товаров одного вида')
          }
      },
      togglePreloader: (state) => {
         state.preloader = !state.preloader
      },
      ohNotoggle: (state) => {
         state.ohNo = !state.ohNo
      },
      updateValue (state, value) {
         state.value = value
         sortPriceAndCategories(state)
       },
       startProcess( state ){
          state.newCatalog = []
          state.newCatalog = [...state.server]
          state.newCatalog = state.newCatalog.filter(item =>{
             return item.price >= state.MINPRICE && item.price <= state.MAXPRICE
          })
          if(state.value.length){
            state.value.forEach(itemValue =>{
               itemValue.name === state.server.filter(itemProducts => {
                  if(itemProducts.type == itemValue.name){
                     state.newCatalog.push(itemProducts)
                  }
               })
            })
          }
       },
      SET_RANGE_MAX_SLIDERS(state, maxPrice){
         state.MAXPRICE = maxPrice
         sortPriceAndCategories(state)
      },
      SET_RANGE_MIN_SLIDERS(state, minPrice){
         state.MINPRICE = minPrice
         sortPriceAndCategories(state)
       },
       INCREMENT_DONT_RESULT(state){
          if(state.DONTRESULT >= 3){
            state.value = []
            alert('поиск не дал результатов')
          }
          state.DONTRESULT++
       },
       updateMessage (state, minPrice) {
         state.MINPRICE = minPrice
       },
       TOGGLEFAVORITE(state, product){
         if(product.favorite){
            state.favorites.push(product)
            localStorage.favorites = JSON.stringify(state.favorites)
         } else{
            state.favorites.forEach((item, index) => {
               if(item.id === product.id){
                  state.favorites.splice(index, 1)
               }
            })
            localStorage.favorites = JSON.stringify(state.favorites)
         }
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
           return Error
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
      },
      updateValueAction ({ commit }, value) {
         commit('updateValue', value)
       },
       startProcess({commit}){
         commit('startProcess')
      },
      SET_RANGE_MIN_SLIDERS({commit}, minPrice ){
         commit('SET_RANGE_MIN_SLIDERS', minPrice)
      },
      SET_RANGE_MAX_SLIDERS({commit}, maxPrice){
         commit('SET_RANGE_MAX_SLIDERS', maxPrice)
      },
      INCREMENT_DONT_RESULT({commit}){
         commit('INCREMENT_DONT_RESULT')
      },
      updateMessage({commit}, minPrice){
         commit('updateMessage', minPrice)
      },
      TOGGLEFAVORITE({commit}, product){
         commit('TOGGLEFAVORITE', product)
      }
   },
   getters: {
      PRODUCTS(states){
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
      },
      VALUE(states){
         if(states.value.length){
            return states.value
         } else{
            return ''
            
         }
      },
      newCatalog(states){
         return states.newCatalog
      },
      DONTRESULT(states){
         return states.DONTRESULT
      },
      FAVORITES(states){
         return states.favorites
      }
   }
});

export default store;