import {Readable, Writable} from 'stream'
import * as fs from 'fs'

const file = fs.createWriteStream("example-" + Date.now()+'.txt')
var yielder
async function * generate(){
    for (var i = 0; i<20;i++){
        yielder = Math.floor(Math.random()*(-420 - 2137)-420)
        yield yielder
    }
}

const readable = Readable.from(generate())
readable.on('data',(chunk)=>{
    file.write(chunk.toString())
})


