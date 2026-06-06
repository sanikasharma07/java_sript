const piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(piDescriptor);// here writable is false and configurable is false so we cannot change the value of pi i  js 
// we can also do this to our prop so that it cannot be changed or deleted
const mynewobj={
    name:'ginger chai',
    price:100,
    isAvailable:true,
   order :function(){
        console.log('chai nhi bani');
    }
}
//const newd=Object.getOwnPropertyDescriptor(Object,mynewobj);// this will give undefined as we are trying to get properties of an object and not a property
//console.log(newd);
const newme=Object.getOwnPropertyDescriptor(mynewobj,'name');
console.log(newme);
//so to decide prop
Object.defineProperty(mynewobj,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(mynewobj,'name'));


for (let [key, value] of Object.entries(mynewobj)) {// we cannot directly write mynewobj as this will give us not iterable cause chai is an object and not an array but we can use Object.entries to get the key value pairs of the object and then we can iterate over it using for of loop  
    if (typeof value !== 'function') {// without this the whole function will be pruinted
        
        console.log(`${key} : ${value}`);// here name will not be printed as it is not enumerable and price and isAvailable will be printed as they are enumerable
    }
}


