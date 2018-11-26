// https://nodejs.org/api/os.html

var os = require('os');
var http = require("http");  

var server = http.createServer(function(request, response) {  
    response.writeHead(200, {  
        'Content-Type': 'text/plain'  
    });  

    response.write("\nCPU\t\t" + os.cpus()[0]['model']);
    response.write("\nArch\t\t" + os.arch());

    bytes = os.totalmem()
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    response.write("\nMemory\t\t" + Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]); 

    response.write("\n\nPlatform\t" + os.platform()); 
    response.write("\nHostname\t" + os.hostname());  

    response.write("\n\nIP\t\t" + os.networkInterfaces()['en0'][1]['address']); 
    response.write("\nMac Address\t" + os.networkInterfaces()['en0'][1]['mac']); 
    

    response.end();  

});  

server.listen(8082);  