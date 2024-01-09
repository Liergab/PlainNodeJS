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

// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// console.log(__dirname)
// console.log(__filename)
const basename = "hello.txt"
console.log(path.join(path.dirname(filePath), basename))
