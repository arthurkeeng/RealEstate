

export const filterCategories = (list , category = null) =>{
   if(category === null ) {
        return list ;
   }
   return list.filter(item =>{
       return  item.category === category
    })
}