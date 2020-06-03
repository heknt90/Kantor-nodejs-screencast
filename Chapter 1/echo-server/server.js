const http = require('http')
const url  = require('url')

// Create new server from http
let server = new http.Server()

// Start listening 1337 port
server.listen(1337, '127.0.0.1')

// Create handler for request event (when client make request)
server.on('request', function(req, res) { 
    // From request get and parse url. We need a parameter "message" for response  
    let urlParsed = url.parse(req.url, true)

    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        // If we have message - send response with the contents of the "message"
        res.end(urlParsed.query.message)
    } else {
        // Otherwise return 404 code
        res.statusCode = 404
        res.end("Page not found")
    }
})