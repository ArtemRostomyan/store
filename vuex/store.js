import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
   state: {
      server: []
   },
   mutations: {
      SET_PRODUCT_TO_STATE: (state, server) => {
         state.server = server;
      }
   },
   actions: {
      GET_PRODUCTS_FROM_GITHUB({commit}){
        return axios("https://raw.githubusercontent.com/ArtemRostomyan/server/main/server.js",{
         method: "GET"
        })
        .then((server) =>{
           commit('SET_PRODUCT_TO_STATE', server.data);
           return server;
        })
        .catch((error) => {
           console.log(error, 'бляяяя')
        })
      }
   },
   getters: {
      PRODUCTS(states){
         return states.server 
      }
   }
});

export default store;