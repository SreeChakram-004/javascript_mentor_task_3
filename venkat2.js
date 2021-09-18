var p=new Promise(function(resolve,reject){
     if(3>5){
         resolve("task 1")
     }
     else{
         reject("task 2")
     }

});

p.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});
