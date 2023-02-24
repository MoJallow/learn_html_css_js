/** 
 SYNTAX
 for(initialExpression; condition; incrementExpression) {
    statement(s);
 }
*/

for(i = 0; i < 5; i++) {
    console.log('Hello world');
}

// print odd numbers between 1 and 10
for(i = 1; i <= 10; i++){
    if(i % 2 !== 0)console.log(i);
}
