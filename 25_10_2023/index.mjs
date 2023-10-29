import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import multer from 'multer'

const app = express()
const upload = multer()
const port = 3000
const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.get('/kontakt',(req,res)=>{
    res.sendFile(path.join(__dirname,'/contact.html'))
})

app.set('view engine', 'pug')
app.set('views', './views')

// for parsing application/json
app.use(express.json())

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }))
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array())
app.use(express.static('public'))

app.post('/kontakt',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

router.get('/api',(req,res)=>{

})

router.get('/api/students',(req,res)=>{
    const API = []
    for (let i = 0; i<10; i++){
        let obj = {
            id: i,
            name: `Obj${i}`,
            surname: `sur${i}`,
            email: `random${i}@mail.com`
        }
        API += obj
    }
    res.send(API)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

export {router as Router}