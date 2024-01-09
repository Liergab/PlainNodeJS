// const error = new Error('something went wrong') using new Error() method

// console.log(`error stack ${error.stack}`)

// throw new Error('throw error') using throw new Error method

import CustomError from "./CustomError.js";

// throw new CustomError('Custome error method!') change the Error to custom

// handle exception using try and catch

// try {
//     something()
// } catch (error) {
//     console.log(`error ${error}`)
//     console.log('custom error message')
// }
const onehundred = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('hello from one');
            resolve('onehunderd')
        }, 3000);
    })
  
 }
const doSomething = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = fetch('localhost:3000/api')
            console.log('From: doSomething Function');
            resolve(data);
        }, 1000);
    });
}
const twohunderd = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hello from two');
            resolve('twohunderd')
        }, 2000);
    })
    
 }


// promise exception
// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve(doSmething());
//     }else{
//         reject(doSomething());
//     }
// })
   


//  promise.then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
//     console.log('error occured')
// })

// async await execption
// const asyncAwait = async() => {
//     try {
//         await doSomething()
//         await onehundred()
//         await twohunderd()
//     } catch (error) {
//         console.log(error)
//     }
// }

// asyncAwait()

const asyncAwait = async() => {
    try {
      const result = await Promise.race([onehundred(), doSomething(), twohunderd()]);

      console.log(`The first finish ${result}`)
      
      
    } catch (error) {
        // console.log(error)
        throw new CustomError(error.message)
    }
}

asyncAwait()