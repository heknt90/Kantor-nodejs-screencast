const http = require('http')
const fs = require('fs')

let server = new http.Server()

server.listen(3000)

server.on('request', (req, res) => {

    let info

    if (req.url == '/') {

        fs.readFile('index.html', (err, info) => {
            if (err) {
                console.error(err)
                res.statusCode = 500
                res.end("На сервере произошла ошибка")
                return
            }

            res.end(info)
        })
    }

})
