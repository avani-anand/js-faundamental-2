function calculateTotalCartValue(...numbers){
    let total=0;
    for(let number of numbers){
        total += number;
    }
    console.log(`The total cart value is ${total}`);
    return total;
}


calculateTotalCartValue(1,2,1,1,5,6,7)



