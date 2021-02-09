let hero = function(state){
   state.newCatalog = []
   state.newCatalog = [...state.server]
   state.newCatalog = state.newCatalog.filter(item =>{
      return item.price >= state.MINPRICE && item.price <= state.MAXPRICE
   })
   if(state.value.length){
      state.newCatalog = []
      state.value.forEach(itemValue =>{
         itemValue.name === state.server.filter(itemProducts => {
            if(itemProducts.type == itemValue.name){
               state.newCatalog.push(itemProducts)
               state.newCatalog = state.newCatalog.filter(item =>{
                  return item.price >= state.MINPRICE && item.price <= state.MAXPRICE
               })
            } 
         })
      })
   }
}
export default hero