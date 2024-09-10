
//Promises
const event = new Promise((resolve,reject)=>{
    let students = 20
    if(students >= 47){
        resolve()
    }else{
        reject()
    }
})
event 
     .then((res)=>{
        console.log("The class is full")
     }).catch((err)=>{
         console.log("There is room for more students!! ")
     }).finally((end)=>{
          console.log("fetching done")
     })//this code is executed whether the code has been rejected or resolved