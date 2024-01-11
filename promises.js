// const promise = new Promise((resolve, reject) => {
//     console.log('Task execution!')

//     if(false){
//         resolve('yes')
//     }else{
//         reject('false')
//     }
// })

// promise.then((data) => {
//     console.log('data:', data)
// }).catch((err) => {
//     console.log('errror:', err)
// })

// const asyncTask = () => {
//     return Promise.resolve()
// }

// asyncTask().then(() =>{
//     console.log(`Name: ${name}`)
// })

// const name= 'Gab'


const apiCall = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Api call from ${time}`)
        },time)
    })
}

const multipleApiCall = [apiCall(1000), apiCall(5000), apiCall(10000)]

Promise.all(multipleApiCall).then((val) => console.log(val))

Promise.race(multipleApiCall).then((val) => console.log(val))