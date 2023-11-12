import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import multer from 'multer'
import router from './router.mjs'
import {PrismaClient} from '@prisma/client'

const app = express()
const upload = multer()
const port = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const prisma = new PrismaClient()

app.use('/api',router)


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(upload.array())
app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.get('/kontakt',(req,res)=>{
    res.sendFile(path.join(__dirname,'/contact.html'))
})


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.post('/kontakt', async(req,res)=>{
    console.log(req.body)
    const body = req.body
    const msg = {
        name: body.imie,
        email: body.email,
        subject: body.temat,
        text: body.message
    }

    await prisma.messages.create({data: msg})
    res.redirect(302, '/')
})

app.listen(port,()=>{
    console.log(`Ur app listening on port ${port}`)
})

export {app as app}