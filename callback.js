
const asyncTask = (cb) => {

    setTimeout(() => {
        cb(null, 'Hello world')
    },0)
}

asyncTask((err, data) =>{
    if(err){
      throw err
    }else{
        console.log('data',data)
    }
})



