//  Q.3 solution 

const fs = require('fs');

fs.readFile('nodejs_architecture.txt', function (err,data) {
    if(err)
    {

        console.log('erroer :',err);
        return err;
    }
     console.log(data.toString());
     return data;
});

// output  --   Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused o n input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is const ructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displa yed by a client's browser that obtains all the application's resources over the internet.


//  Q.4 solution


fs.appendFile('nodejs_architecture.txt','web applications built on other frameworks. Node js can easily handle multiple client requests thout requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier. Compared to other server-side languages, Node js has distinct ad vantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memoryand resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple framework s and makes the development process easier','utf-8',function (err) {
     if (err) {
      console.log("error in appending  file !");
   } else {
      console.log("success in appending file !");
   }
 
})

// output   -- tions, including but not limited to chat applications and multimedia streaming websites. The platform is const ructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displa yed by a client's browser that obtains all the application's resources over the internet.web applications built on other frameworks. Node js can easily handle multiple client requests thout requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier. Compared to other server-side languages, Node js has distinct ad vantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memoryand resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple framework s and makes the development process easier success in appending file !


// Q .5 solution 


fs.unlink('nodejs_architecture.txt',function (err) {
   if (err) {
      console.log("error in deleting file");
   }
   else{
      console.log("sucessfully file deleted");
   }
})

// output  -sucessfully file deleted

