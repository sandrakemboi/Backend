/*Async /await only works when one creates a fuction that is declared as asynchronous
by using the "async" keyword.*/
const axios = require("axios")

const AyncFunc  = async () =>{
   try{ const data =  await axios.get("https://cat-fact.herokuapp.com/facts")
    console.log(data)
 } catch (err){
    console.log(err)
}
}
AyncFunc()
/**For error handling purposes we use try catch blocks */