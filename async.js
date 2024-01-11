

// console.log('start operation')

// function sleep(mils){
//     let startTime = new Date().getTime();

//     while(new Date().getTime() < startTime + mils){
//         console.log("in progress")
//     }

//     console.log('operation done')
// }

// sleep(1000)

// console.log('do something else')


console.log('start operation')

function sleep(mils){
    console.log('operation is running')

    setTimeout(() =>{
        console.log('Operation is done!')
    },mils)
}

sleep(2000)

console.log('do something else')
