const students=[
    {
        name:"Mithun",
        marks: 95 ,
    },
    {
        name:"prabir",
        marks: 75 ,
    },
    {
        name:"alka",
        marks: 92 ,
    },
    {
        name:"shivam",
        marks: 70 ,
    },
    {
        name:"farman",
        marks: 99 ,
    },
];


let usermarks (name)=students.find(function(item){
    for(item.name==name){

    
    if( item.marks>90){
        console.log(`congraturaltion ${item.name} you have cleared the exam`);
        return usermarks;
    }
   else{
    console.log(`${item.name } you  have not clear the exam `);
   }
}

})

console.log(usermarks);



// let usermarks=students.find(function(item){
//     if( item.marks>90){
//         console.log(`congraturaltion ${item.name} you have cleared the exam`);
//     }
//    else{
//     console.log(`${item.name } you  have not clear the exam `);
//    }

// })

// console.log(usermarks);



