// most people use fetch( ) and not XMLHttpRequest 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()// withouth this resolve part will not work
    }, 1000)
})

promiseOne.then(function(){// this function only depends on resolve
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task2')
        resolve()
    },1000)
  
}).then(function(){
    console.log('Promise 2 consumed')
})
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "hitesh", password: "123"})
    },1000)
})
promisethree.then(function(user){
    console.log(user)// this will give {username: "hitesh", password: "123"}
})
const promisefour=new Promise(function(resolve,reject){

})
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
