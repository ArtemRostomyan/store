import sortPriceAndCategories from '../jsFunctions/sortPriceAndCategories'

export default {
   SET_PRODUCT_TO_STATE: (state, server) => {
      state.server = server;
   },
   SET_CARD: (state, product) => {
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
   TOGGLE_BASKET_VISIBLITY: (state) => {
      state.basketVisibility = !state.basketVisibility
   },
   DELETE_ITEM_FROM_BASKET: (state, index) => {
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
   TOGGLE_PRELOADER: (state) => {
      state.preloader = !state.preloader
   },
   OH_NO_TOGGLE: (state) => {
      state.ohNo = !state.ohNo
   },
   UPDATE_VALUE_ACTION (state, value) {
      state.value = value
      sortPriceAndCategories(state)
    },
    START_PROCESS( state ){
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
    TOGGLE_FAVORITE(state, product){
      if(!product.favorite){
         product.favorite = !product.favorite
         state.favorites.push(product)
         localStorage.favorites = JSON.stringify(state.favorites)
      } else{
         product.favorite = !product.favorite
         state.favorites.forEach((item, index) => {
            if(item.id === product.id){
               state.favorites.splice(index, 1)
            }
         })
         localStorage.favorites = JSON.stringify(state.favorites) 
      }
    },
    START_FAVORITES(state, product){
      if(product.favorite){
         state.favorites.push(product)
      } else{
         state.favorites.forEach((item, index) => {
            if(item.id === product.id){
               state.favorites.splice(index, 1)
            }
         })
      }
    }
}