import {readFile} from 'fs/promises'
import http from "http"

const hostname = '127.0.0.1'
const port = 3000
const srv = http.createServer(async (req,res)=>{
    const url = req.url
    if (url === '/'){
        res.statusCode = 200
        const html = await readFile('./index.html')
        res.setHeader('content-type','text/html')
        res.write(html)
        res.end()
    }else if (url === '/kontakt' && method === 'POST'){
        req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString()
            const kontakt = parsedBody.split('=')[1]
            await writeFile(`message-${Date.now().toString()}.txt`, kontakt)
            res.statusCode = 302
            res.setHeader('Location', '/contact')
            return res.end()
            })
    } else if (url === '/dziekujemy'){
        res.statusCode = 200
        res.write("Thank you page")
        res.end()
    } else if (url === '/api'){
        res.end()
    } else {
        res.statusCode = 404
        res.write("JSON")
        res.end()
    }
})

srv.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
   })
