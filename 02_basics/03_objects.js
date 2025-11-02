const Jsuser = {
    name: "nashil",
    "full name": "Nashil Damudi",
    age: 21,
    location: "bhatkal",
    email: "nashil@gmail.com",
    isloggedin: false,
    lastloginDays: ["Monday", "saturday"]
}

Jsuser.greeting = function() {
    console.log(`Hello js user, ${this.name}`);
    
}

console.log(Jsuser.greeting());
