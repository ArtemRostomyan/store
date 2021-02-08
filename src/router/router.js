import Vue from 'vue'
import VueRouter from 'vue-router'

import catalogProduct from '../components/catalog/v-catalog-product'
import basket from '../components/separate-basket/v-separate-basket'

Vue.use(VueRouter)

let router = new VueRouter({
   routes: [
      {
         path: "/",
         name: "catalog",
         component: catalogProduct,
         props: true
      },
      {
         path: "/basket",
         name: "basket",
         component: basket,
         props: true
      }
   ]
})


export default router;