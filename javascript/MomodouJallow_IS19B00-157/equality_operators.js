/** In JavaScript there are two types of equality operators:
 * 
 * Strict Equality Operation(===): Ensures that both operands have the same data type 
 * and the same value for it to return True.
 * 
 * Lose Equality Operator(==): It doesn't care about the data types of the operands
 * matching. If the data types don't match, it converts the type of the operand on 
 * the right to match the type of the operand on the left, and only checks if the 
 * values are equal. 
 * 
 * 
*/

// Strict Equality Operator
console.log(1 === 1);  // returns True
console.log("1" === 1 );  //returns False

// Lose Equality Operator
console.log(1 == 1);  //returns True
console.log("1" == 1 );  // returns True