const http = require('http')
const url  = require('url')

// Create new server from http
let server = new http.Server()

// Start listening 1337 port
server.listen(1337, '127.0.0.1')

// Create handler for request event (when client make request)
server.on('request', function(req, res) { 

    // before set header cache-control
    console.log('Old header "Cache-control":', res.getHeader('cache-control'))
    
    // set header cache-control
    res.setHeader('Cache-control', 'no-cache, no-store, must-revalidate')
    
    // after set header cache-control
    console.log('New header "Cache-control":', res.getHeader('cache-control'))

    res.end('Changed Cache-control header')

})