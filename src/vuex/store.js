import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'

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
   mutations,
   actions,
   getters
});

export default store;