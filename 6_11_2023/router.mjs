import express from 'express'
import connection from './con1.mjs'
const router = express.Router()

router.get('/', (req,res)=>{
    const API = {
        students: '/api/students',
        subjects: '/api/subjects'
    }
    res.send(API)
})

router.get('/subjects',(req,res)=>{
    connection.query("SELECT * FROM subjects",function(error, result){
        if (error){
            res.statusCode = 404
        }
        res.send(result)
    })
})

router.get('/students',(req,res)=>{
    connection.query("SELECT * FROM students",function(error, result){
        if (error){
            res.statusCode = 404
        }
        res.send(result)
    })
})
router.get('/students/:id',(req,res)=>{
    connection.query(`SELECT * FROM students WHERE id = ${Number(req.params.id)}`,function(error, result){
        if (error){
            res.statusCode = 404
        }
        res.send(result)
    })
})

router.get('/subjects/:id',(req,res)=>{
    connection.query(`SELECT * FROM subjects WHERE id = ${Number(req.params.id)}`,function(error, result){
        if (error) {
            res.statusCode = 404
        }
        res.send(result)
    })
})  

export default router