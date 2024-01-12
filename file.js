const fs = require('fs');
function files(){
// fs.readFile('file.txt', function(err, data){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(data);
//         }
//     })
//
let data = 'this is txt file';
// fs.writeFile('file.txt',data,function(err){
//     if(err){
//         console.log(err);
//     }
// })

// fs.appendFile('file.txt',data,function(err){
//     if(err){
//         console.log(err);
//     }
// })
fs.rename('files.txt','file.txt', function(err){
    if(err){
        console.log(err);
    }
})
 }
files();