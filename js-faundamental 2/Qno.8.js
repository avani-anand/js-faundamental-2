function calRemainingday(eventdate)
{
    const currentDate = new Date();
    const eventDateTime = new Date(eventdate);

    const timeDifference = eventDateTime-currentDate;
    const daysRemaining =Math.ceil(timeDifference/(1000*60*60*24));

    return daysRemaining;
}


const eventDate= '2023-09-30'
console.log(calRemainingday(eventDate));


// OUTPUT  10



























