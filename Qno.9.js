
function uniqueCharactersCheck(string){
    const charSet = new Set ();

    for (const char of string){
        if (charSet.has(char)){
            console.log("the input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("the input string contains only unique characters.");
    return true;
}

uniqueCharactersCheck("mithun")    
// OUTPUT: the input string contains unique characters.


uniqueCharactersCheck("anurag")
// OUTPUT: the input string contains duplicates.






















