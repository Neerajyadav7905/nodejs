const url = require('url');
function file(){
    let path = 'http://localhost:8080/default.htm?year=2017&month=february';
    let data = url.parse(path,true);
    console.log(data.host);
    console.log(data.search);
    console.log(data.pathname);
    let q = data.query;
    console.log(q);
    console.log(q.year);
}

file();