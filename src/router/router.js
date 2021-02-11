import Vue from 'vue'
import VueRouter from 'vue-router'

import vCatalogProduct from '../components/catalog/v-catalog-product'
import vBasket from '../components/separate-basket/v-separate-basket'
import vSeparateCardProduct from '../components/catalog/v-separate-card-product'
import vHeart from '../components/header-basket/favorites-products/v-favorites-products'

Vue.use(VueRouter)

let router = new VueRouter({
   routes: [
      {
         path: "/",
         name: "catalog",
         component: vCatalogProduct,
         props: true
      },
      {
         path: "/product",
         name: "separate-product",
         component: vSeparateCardProduct,
         props: true ,
         product_data: true
      },
      {
         path: "/heart",
         name: "heart",
         component: vHeart
      },
      {
         path: "/basket",
         name: "basket",
         component: vBasket,
         props: true
      }
   ]
})


export default router;