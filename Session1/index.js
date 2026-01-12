const http = require("http");
const axios = require("axios");
const currencies = require("./currencies.json");
const PORT = 8082

     const server = http.createServer(async (req, res) => {
    //             const serverInfo = {
    //         serverName: "Crio Server",
    //         version: "1.0.0",
    //         currentDate: new Date().toLocaleDateString(),
    //         currentTime: new Date().toLocaleTimeString(),
    //         };
    // if (req.url === "/status") {
    //   res.writeHead(200, { "Content-Type": "application/json" }); //Adding Headers
    //   res.write(JSON.stringify(serverInfo));
    //   res.end();
    // } else {
    //   res.writeHead(200, { "Content-Type": "text/html" }); //Adding Headers
    //   res.write(`<h1>Hello from server</h1>`);
    //   res.end();
    // };
   
     switch(req.url) {
      case "/":
        res
        .writeHead(200,{"Content-Type":"application/text"})
        .end("<h1>Currency Database</h1>");
        break;

      case "/currencies":
        try {
          const response = await axios.get("https://api.coinbase.com/v2/currencies")
        res
        .writeHead(200,{"Content-Type":"application/json"})
        .end(JSON.stringify(response.data));
        } catch (error) {
        res
        .writeHead(500)
        .end("Something went wrong..");
        }
        
        break;

      default:
        res.writeHead(404).end()
        break;  
     }


});

server.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});