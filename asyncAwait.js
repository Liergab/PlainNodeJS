
const userLogin = () => {
    console.log('Enter Username and Password')
    let username = prompt("Enter username")
    let password = prompt("Enter password")


    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('Performing user Authentication')
            if(username === 'bryan' && password === 'bryan123'){
                resolve(`${username} user`)
            }else{
                reject('failed')
            }
        },1000)
    })
}

function goToHomePage(userAuthStatus){
    return Promise.resolve(`Go to Homepage as : ${userAuthStatus}`)
}

const performTask = async() => {
    try {
        const response = await userLogin()
        console.log('Validate User')
        const authUser = await goToHomePage(response)
        console.log(authUser)
    } catch (error) {
        console.log(error)
    }
   
}
performTask()
// userLogin().then((response) => {
//     console.log('validated user')
//    return goToHomePage(response)
// }).then((userAuthStatus) => {
//     console.log(userAuthStatus)
// }).catch((err)=>{
//     console.log(err)
// })
