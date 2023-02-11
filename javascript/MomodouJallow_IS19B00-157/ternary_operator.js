// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;

// Ternary operator
let customer_type = points > 100? "gold" : "silver"
console.log(customer_type)