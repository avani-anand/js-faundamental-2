let user=["guarav","mithun","avni","anand","sharma","neha"]

function isUserPresent(username) {
    if (user.includes(username))
    {
        console.log(`yes , ${username} is a valid user.`);
        return true;
    }
    else{
        console.log(`no, ${username} is not a valid user`);
        return true;
    }
}


isUserPresent("mithun")

 // output  : Yes, Mithun is a valid user.




isUserPresent("someone")


// output: No, Someone is not a valid user.



