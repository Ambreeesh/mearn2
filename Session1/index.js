const http = require("http");
const PORT = 8081
const server = http.createServer((req, res) => {
            const serverInfo = {
        serverName: "Crio Server",
        version: "1.0.0",
        currentDate: new Date().toLocaleDateString(),
        currentTime: new Date().toLocaleTimeString(),
        };
   if (req.url === "/status") {
    res.writeHead(200, { "Content-Type": "application/json" }); //Adding Headers
    res.write(JSON.stringify(serverInfo));
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" }); //Adding Headers
    res.write(`<h1>Hello from server</h1>`);
    res.end();
  }
;
});

server.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});