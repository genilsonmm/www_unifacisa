const http = require('http')

const server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "Application/json"})
    const obj = {
        name: 'Maria',
        age: 30
    }
    response.end(JSON.stringify(obj))
})

server.listen(8080, function(){
    console.log("Executando o server na porta 8080")
})