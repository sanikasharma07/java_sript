class user{
    constructor(username){
        this.username;
    }
      logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){// now instance of user class cannot access this function because it is static function, it is directly attached to the class and not to the instances of the class, so we can call this function using the class name itself
        return `123`
    }
}
const sanika=new user("sanika")//for testing 