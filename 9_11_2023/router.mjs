import express from 'express'
import {PrismaClient, Prisma} from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

router.get('/', async(req,res)=>{
    const API = {
        students: '/api/students',
        subjects: '/api/subjects'
    }
    res.send(API)
})

router.get('/subjects', async(req,res)=>{
    const subjects = await prisma.subjects.findMany()
    res.send(subjects)
})

router.get('/students', async(req,res)=>{
    const students = await prisma.students.findMany()
    res.send(students)
})
router.get('/students/:id', async(req,res)=>{
    let id = Number(req.params.id)
    const studentsID = await prisma.students.findUnique({
        where:{
            id: id
        }
    })
    res.send(studentsID)
})

router.get('/subjects/:id', async(req,res)=>{
    let id = Number(req.params.id)
    const subjectsID = await prisma.students.findUnique({
        where:{
            id: id
        }
    })
    res.send(subjectsID)
})  

export default router