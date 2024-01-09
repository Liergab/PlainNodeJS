// console.log(process.argv[2]);

// process.argv.forEach((value, index) =>{
//     console.log(`Index : ${index} => Value: ${value} `)
// })
import minimist from "minimist";
const newArg = minimist(process.argv.slice(2));

console.log(newArg.name)