export default {
   PRODUCTS(states){
      return states.server 
   },
   BASKET_LENGTH(states){
      return states.basket_length
   },
   BASKET_VISIBLITY(states){
      return states.basketVisibility
   },
   BASKET(states){
      return states.basket
   },
   REMOVE_ITEM_TEXT(states){
      return states.removeItemText
   },
   quantity(states){
      return states.quantity
   },
   total_balance(states){
      return states.total_balance
   },
   PRELOADER(states){
      return states.preloader
   },
   removeItemText(states){
      return states.removeItemText
   },
   OH_NO(states){
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
   NEW_CATALOG(states){
      return states.newCatalog
   },
   DONTRESULT(states){
      return states.DONTRESULT
   },
   FAVORITES(states){
      return states.favorites
   }
}