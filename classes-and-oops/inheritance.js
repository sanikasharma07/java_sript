class user{
    constructor(username){
        this.username = username;
    }
    logme(){
console.log(`${this.username}`);
    }
}
class Teacher extends user{
    constructor(username, email,password){
        super(username); // Call the parent class constructor-> automatically takes then so we use it rather than call
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`course added by ${this.username}` );
    }
}
const sanika = new Teacher("sanika", "abc","123")
console.log(sanika.username);
sanika.addCourse();
sanika.logme()
console.log(sanika instanceof user);
console.log(user instanceof Teacher);
