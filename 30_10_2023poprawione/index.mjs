import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import multer from 'multer'
import {createConnection} from 'mysql' 

const app = express()
const upload = multer()
const router = express.Router()
const port = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const connection = createConnection({
    host: '0.0.0.0',
    user: 'root',
    password: '',
    //database: 'api',
    port: 3306
})
connection.connect((err)=>{
    if(err) throw err
    connection.query('USE api', (err, result)=>{
        if(err) throw err
        console.log(result)
    })
})

app.use(router)

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

router.get('/kontakt',(req,res)=>{
    res.sendFile(path.join(__dirname,'/contact.html'))
})


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));


// for parsing application/json
app.use(express.json())

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }))
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array())
app.use(express.static('public'))

router.post('/kontakt',(req,res)=>{
    const body = []
    req.on('data',(chunk)=>{
        body.push(chunk)
    })
    console.log(body)
    res.redirect('/')
})

router.get('/api/subjects',(req,res)=>{
    connection.query("SELECT * FROM subjects",function(error, result){
        if (error){
            res.statusCode = 404
        }
        res.send(result)
    })
})

router.get('/api/students',(req,res)=>{
    connection.query("SELECT * FROM students",function(error, result){
        if (error){
            res.statusCode = 404
        }
        res.render(__dirname+"/students",{students:result});
    })
})
router.get('/api/students/:id',(req,res)=>{
    connection.query(`SELECT * FROM students WHERE id = ${Number(req.params.id)}`,function(error, result){
        if (error){
            res.statusCode = 404
        }
        res.send(result)
    })
})

router.get('/api/subjects/:id',(req,res)=>{
    connection.query(`SELECT * FROM subjects WHERE id = ${Number(req.params.id)}`,function(error, result){
        if (error) {
            res.statusCode = 404
        }
        res.send(result)
    })
})

app.listen(port,()=>{
    console.log(`Ur app listening on port ${port}`)
})

export {app as app}