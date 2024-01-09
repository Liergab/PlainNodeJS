// const x = '1'
// const y = '2'

// console.log(x,y,)

// %s format to String
// %d  ""     to Number
// %i   ""   to integers
// %o   ""   to object
// console.log('i am %s and my age is %i', 'Bryan', 24)
// console.clear() clear the console
// console.count('hello bryan') console.count count how many time executed a single data 
// console.count('hello gab')
// console.count('hello bryan')
// console.countReset('hello bryan') it will reset all the data inside this method
// console.count('hello bryan')

// const function1 = () => {console.trace()};

// const function2 = () => {function1()}

// function2()

// checking time of a function

// const sum = () =>  console.log(`The sum of 2 + 3 = ${2 + 3} ` )
// const multiply = () => console.log(`The multiply of 2 * 3 = ${2 * 3} ` )

// const measureTime = () => {
//     console.time('sum()')
//     sum()
//     console.timeEnd('sum()')

//     console.time('multiply()')
//     multiply()
//     console.timeEnd('multiply()')
// }

// measureTime()

import ProgressBar from "progress";

const bar = new ProgressBar('downloading [:bar] rate/bps :percent :etas',{
    total:20
})

const timer = setInterval(()=> {
    bar.tick();
    if(bar.complete){
        clearInterval(timer)
    }
},100)