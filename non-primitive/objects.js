// objects can be declared as constructor(singleton-one of its own kind) or as literal
//object literals
//to add any symbol in string 
const sym=Symbol("Mykey")
const user={
    name:"sanika",// it automatically takes it as"name"
    [sym]:"Mykey",// syntax of adding a symbol
    "full name":"sanika sharma",
    loggeddays:[ ' monday','tuesday']
}
// ways to access
// user.name 
// user["name"]  now in full name you can only use user["full name"]
// to freeze any value use 
Object.freeze(user.name)
// now if you change name it will not give any error but value will not change
user.greeting=function(){
    console.log("Hello user!");
}
console.log(user.greeting)// this gives reference of that function
console.log(user.greeting())// this actually prints whats inside the function
user.greeting2=function(){
    console.log(`Hello user!,${this.name}`);// this is used to get information about what all prop are associated with that particular function
}
console.log(user.greeting2)// this gives reference of that function
console.log(user.greeting2())


// singleton 
const sing=new Object()// this is singleton object
// we can insert object in object
const oio={
    fullname:{
        username:{
            name:"sani",
            offname:"name"
        }
    }
}
// to merge two objects 
// obj3={obj1,obj2} -> same as arrays will treat it as an object
const obj3=Object.assign({},user,oio)// {}-> not compulsary ,just to show that all the objects are going in this empty array
console.log(obj3) 
console.log(user)
// but if i would have done  (user,oio) then user would have been === obj3
// most used syntax 
// obj3={...user,...oio}

// when data comes from database ,usually comes in array of objects
// how to acces-> users[1].email
console.log(Object.keys(user))// we can access key and values -> provided as array
// .entries-> covert all key value pair in arrays w 1st element key and second pair
//********************* */
// this is destructuring
const course={
    coursename:"dsa",
    cinstructor:"striver"
}
const {cinstructor:ins}=course
console.log(ins)
// api-> comes in json format -> hepls to give user the information or data from database in backend
// {
// "name":"sanika",   // json format
// "fees":99
// }



