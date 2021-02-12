import axios from 'axios'

export default {
   GET_PRODUCTS_FROM_GITHUB({commit}){
      return axios("https://raw.githubusercontent.com/ArtemRostomyan/server/main/server.js",{
       method: "GET"
      })
      .then((server) =>{
         commit('SET_PRODUCT_TO_STATE', server.data);
         return server;
      })
      .catch(() => {
         alert( 'Ошибка. Возможно проблема связана с интернетом.')
         return Error
      })
    },
    ADD_IN_BASKET({commit}, product){
       commit('SET_CARD', product)
    },
    TOGGLE_BASKET_VISIBLITY({commit}){
       commit('TOGGLE_BASKET_VISIBLITY')
    },
    DELETE_ITEM_FROM_BASKET({commit}, index ){
       commit('DELETE_ITEM_FROM_BASKET', index )
    },
    decrementQuantityInStore({commit}, index, product){
       commit('decrementQuantityInStore', index, product)
    },
    incrementQuantityInStore({commit}, product){
       commit('incrementQuantityInStore', product)
    },
    TOGGLE_PRELOADER({commit}){
       commit('TOGGLE_PRELOADER')
    },
    OH_NO_TOGGLE({commit}){
       commit('OH_NO_TOGGLE')
    },
    UPDATE_VALUE_ACTION({ commit }, value) {
       commit('UPDATE_VALUE_ACTION', value)
     },
     START_PROCESS({commit}){
       commit('START_PROCESS')
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
    TOGGLE_FAVORITE({commit}, product){
       commit('TOGGLE_FAVORITE', product)
    },
    START_FAVORITES({commit}, product){
       commit('START_FAVORITES', product)
    }
}