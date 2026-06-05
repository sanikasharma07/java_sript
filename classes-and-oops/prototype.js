
const namet=function(name){
this.name=name
}
namet.prototype.truelength=function (){
      console.log(this.name.trim().length);
}
let myname=new namet('   Sanika     ')
myname.truelength()
Object.prototype.sanika=function(){// this will generate this function directly in object prototype so all the objects will have this function 
    console.log('sanika');
}

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport// it can also use prop of teachsupport now
}
console.log(TASupport.isAvailable)
// we can also do-> old syntax
Teacher.__proto__=User
console.log(Teacher.name)

// mordern syntax
// Object.setPrototypeOf(inwhom,of whom)
Object.setPrototypeOf(Teacher,TASupport)

String.prototype.newLength=function(){
    console.log(`${this}`);
    return this.trim().length
}
const t= "   sanika   "
console.log(t.newLength());
"   code   ".newLength()