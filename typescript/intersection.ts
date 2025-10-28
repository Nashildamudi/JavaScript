type Customer = {
    name: string;
    email: string;
}

type BillingDetails = {
    cardNumbers: string;
    expiryDate: string;
}

type BillingCustomer = Customer & BillingDetails;

let customer1: BillingCustomer = {
     
    name: "nasil",
    email: "nashil@gmail.com",
    cardNumbers: "8754 5577 5454",
    expiryDate: "12/08/2028"
}

console.log(customer1);
