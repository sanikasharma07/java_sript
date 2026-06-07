class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

get password(){// getter is used to access the value of a property, it is defined using get  keyword and it is called when we try to access the property, it is used to return the value of a property in a specific format or to perform some operations before returning the value
    return this._password.toUpperCase(); // we have to use getter and setter with each other 
}
set password(value){
    this._password=value.toUpperCase();// in system it will be saved as abc only but when a user will access it,it will show ABC
}
}
const sanika=new user("abc","abc")
console.log(sanika.password);


//******* old syntax*******
// function User(email,password){
//     this._email=email;
//     this._password=password;
//     Object.defineProperty(this,'password',{
//         get:function(){
//             return this._password.toUpperCase();
//         },
//         set:function(value){
//             return this._password=value.toUpperCase();
//         }
//     })
                                  
// }
// **********object based*****************
const me={
    _username: "sanika",
    get username(){
        return this._username.toUpperCase(); 
    },
    set username(value){
        this._username=value.toUpperCase();
    }
}
const tea=Object.create(me);
console.log(tea.username);

