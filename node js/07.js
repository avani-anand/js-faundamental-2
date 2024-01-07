const http = require('http');

const server=http.createServer((req,res)=>
{
    res.setHeader('Content-Type', 'text/plain');
    
    res.end(' i am happy to learn full stack development by pw skills ');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});













