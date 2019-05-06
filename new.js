var request = require('request');
var fs = require('fs');
console.log("starting");
request.get('https://sytantris.github.io/http-examples/future.jpg')
        //console.log("downloading image");               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err; 
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream('./future.jpg'));   
       console.log("got the image");            // Note 4
