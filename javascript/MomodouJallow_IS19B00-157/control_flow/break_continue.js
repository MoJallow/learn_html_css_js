// The break keyword
let i = 0;
while(i <= 10) {
    if(i === 5) break;
    console.log(i);
    i++;
}

console.log();

// the continue keyword
let j = 0;
while(j <= 10){
    if(j % 2 === 0){
        j++;
        continue;
    }   
    console.log(j);
    j++;
};
