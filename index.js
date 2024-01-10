// import 'dotenv/config'
// import cowsay from 'cowsay'
// console.log(cowsay.say({
//     text:"From index js",
//     e:"00",
//     t:"u"
// }))
// console.log('Bryan');
// console.log('Gabriel');
// console.log('rubio')
// console.log(process.env.NAME)

import path from 'path';

const filePath = "/Users/Asus/Bryan/plainnode/files/sample.txt"

// dirname
// console.log(`Diretoryname => ${path.dirname(filePath)}`)

// basename
// console.log(`basename => ${path.basename(filePath)}`)
// // extension
// console.log(`extension => ${path.extname(filePath)}`)


// console.log(__dirname)
// console.log(__filename)
// const basename = "hello.txt"
// console.log(path.join(path.dirname(filePath), path.basename(filePath)))

import fs from 'fs'
// reading from afile

// fs.readFile(filePath,'utf-8',(err,data)=>{
//     //this is for asynchronous
//     if(err){
//       throw new Error('something went wrong')
//     }

//     console.log(data)
// })

import { fileURLToPath } from 'url';
import fsPromise from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// const hey = fs.readFileSync(path.join(__dirname, 'files', 'sample.txt'), 'utf-8');

// console.log(hey)
// console.log(__dirname)

const readingfile = async() => {
    try {
        const data = await fsPromise.readFile(filePath, {encoding: 'utf-8'})
        console.log('FromfsPromise =>',data)
    } catch (error) {
        console.log('error from fsPromise')
    }
}
readingfile()

// writing in file
const textFile = path.join(__dirname, 'files', 'text.txt')
const content = "Write, Append, Read"
// fs.writeFile(textFile,content,(err)=>{
//     //this is for asynchronous
//     if(err){
//       throw new Error('something went wrong')
//     }
//     console.log('Successful writing using fs.write! =>')

//     fs.readFile(textFile,'utf-8',(err, data) => {
//         if(err)   throw new Error('something went wrong')

//         console.log(`Nested callback Inside of Fs.write => ${data}`)
//     })
// })

// write with async await with manny operation

const writeAppendRead = async() => {
    try {
        await fsPromise.writeFile(textFile, content);
        await fsPromise.appendFile(textFile, "\nThis is text append");
        const data = await fsPromise.readFile(textFile, 'utf-8')
        console.log(data)
    } catch (error) {
        console.error('something went wrong')
    }
}

writeAppendRead()

