const fs = require('fs');

// fs.writeFile("test.txt", "nigga", (err) =>{
//     if (err) throw err;
//     console.log('nigga is readable now')
// } )

fs.readFile("test.txt", "utf8", (err, data) =>{
    if (err) throw (err);
    console.log(data);
}  )