function calculateTotalCartValue(...numbers){
    let total=0;
    for(let number of numbers){
        total += number;
    }
    return total;
}


const value=calculateTotalCartValue(1,2,1,1,5,6,7)
console.log(`total cart value is `+ value);



