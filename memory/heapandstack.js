//stack(primitive) ,heap(non primitive)
let name="Sanika"
let name1=name
name1="Divyam"
console.log(name1,name)// call by value ->here a copy is given no change in orignal
let userone={
    email:"bc2gmail.com",
    id:12345
}
let user2=userone
user2.email="sanika@gmail.com"
console.log(userone.email,user2.email)// this will change as object is non primitive and hece pass by reference in heap memory