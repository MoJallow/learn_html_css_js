// Logical AND(&&)
// Returns TRUE if both operands evaluates to TRUE
console.log(true && true)
console.log(false && true)

let high_income = true;
let good_credit_score = true;
let eligible_for_loan = high_income && good_credit_score

console.log(eligible_for_loan)

// Logical OR(||)
// Returns TRUE if at least one of the operands is TRUE
console.log(true || true)
console.log(false || true)
console.log(false || false)

let is_resident = false;
let has_meal_card = true;
let is_allowed_to_eat = is_resident || has_meal_card

console.log(is_allowed_to_eat)

// NOT(!)
// Converts TRUE to FALSE and coverts FALSE to TRUE
console.log(!true)
console.log(!false)

