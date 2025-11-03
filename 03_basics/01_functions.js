// function sayMyname() {
//     console.log("N");
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("L"); 
// }

// sayMyname()
// function addNumber(num1, num2) {
//     console.log(num1+num2);
    
// }

// addNumber(23, 12)


function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 450, 755));

const user = {
    username: "nashil",
    price: 199
}

function handleobject(anyobject) {
     console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
     
}

handleobject(user)