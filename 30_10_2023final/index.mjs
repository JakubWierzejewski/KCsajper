import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import multer from 'multer'
import {createConnection} from 'mysql' 
import router from './router.mjs'
import connection from './con1.mjs'

const app = express()
const upload = multer()
const port = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use('/api',router)


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(upload.array())
app.use(express.static('public'))

connection.connect((err)=>{
    if(err) throw err
    connection.query('USE api', (err, result)=>{
        if(err) throw err
        console.log(result)
    })
})


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.get('/kontakt',(req,res)=>{
    res.sendFile(path.join(__dirname,'/contact.html'))
})


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.post('/kontakt',(req,res)=>{
    console.log(req.body)
    const msg = req.body
    connection.query('INSERT INTO messages VALUES (default,'+req.imie+','+req.email+','+req.temat+','+req.message+')',function(error){
        if (error){
            throw error
        }
        console.log('row added')
    })
    res.redirect('/')
})

app.listen(port,()=>{
    console.log(`Ur app listening on port ${port}`)
})

export {app as app}