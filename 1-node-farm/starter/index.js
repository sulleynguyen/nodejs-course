const fs = require("fs");

const http = require("http");

const url = require("url");

///////////////////////////////////////////
/////Files

//blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// var d = new Date(Date.now());

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${d.toString()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File writtent!");

//non-blocking, asynchronous way

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERROR!");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("your file has been written :D");
//       });
//     });
//   });
// });
// console.log("will read file!");

/////////////////////////////////////////////
////Server
const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("this is the Overview!");
  } else if (pathName === "/product") {
    res.end("This is the Product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(9000, "127.0.0.1", () => {
  console.log("Listening to request on port 9000");
});
