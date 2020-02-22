var http = require("http");
var os = require("os");
var path = require("path");
var greeting = require('./personalmodule');



http.createServer(function (request, response){
   
    //TASK1!!!
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write ("<h2>System information</h2>");
    response.write(`Current user name: ${os.userInfo().username} <br/>`);
    response.write(`OS type: ${os.type() }<br/>`)
    response.write(`System work time: ${ os.uptime() / 60}<br/>`)
    response.write(` Current work directory: ${path.dirname(__filename)}<br/>`);
    response.write(`Server file name: ${path.basename(__filename)}<br/>`);
    
//TASK2!!!

    var sysName =  os.userInfo().username;
    response.write(`Date of request: ${greeting.date}`);
    function hello (name) {
        if ( greeting >= 23 && greeting <=5)
            {
                response.write(` <br/>Dood night, ${name} `);
            }else if( greeting >= 5 && greeting <= 11 ){
                response.write(` <br/>Dood morning, ${name}`);
                    
            }else if( greeting >= 11 && greeting <= 17 ){
                response.write(`<br/> Dood afternoon, ${name} `);
                    
            }else if( greeting >= 17 && greeting <= 23 ){
                response.write(` <br/> Dood evenig, ${name} `);
                    
           }
    }
    hello(sysName);
    
    

    response.end ('<h5>Header from server!</h5>');
    
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');

