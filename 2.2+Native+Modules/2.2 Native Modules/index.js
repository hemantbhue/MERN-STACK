const fs = require("fs");

// fs.writeFile("hemanta.html","Hello from NODEJS!!", (err) => {
//     if (err) throw err;
//     console.log("file has been saved");
// })


fs.readFile("hemanta.html","utf-8", (err,data) => {
    if (err) throw err;
    console.log(data);
})