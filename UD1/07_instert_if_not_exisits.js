
let array = ['pera', 'manzana']

function insert(array, item, booleano){
      if(array.includes(item) == false) 
         if (booleano == true){
            array.unshift(item)}
            else{
               array.push(item)
            }
            return array
      }

      console.log(insert (array, 'pera', false))
      console.log (insert (array, 'melon', false))
      console.log(insert (array, 'melocoton', true))
     