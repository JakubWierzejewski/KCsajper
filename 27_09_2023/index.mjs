import http, { Server } from 'http'

const host = '127.0.0.1'
const port = 3000
console.log("World Hello")

const srv = http.createServer((req,res)=>{

    const url = req.url
    if (url === '/'){
        console.log("Hello World")
    } else {

    }
})

srv.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`)
})