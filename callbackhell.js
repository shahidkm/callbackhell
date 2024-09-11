function x1(callback){
    setTimeout(()=>{
        console.log("first");
        callback()
    },3000)
}
function x2(callback){
    setTimeout(()=>{
        console.log("secound");
        callback()
    },3000)
}
function x3(callback){
    setTimeout(()=>{
        console.log("third");
        callback()
    },3000)
}

x1(()=>{
    x2(()=>{
        x3(()=>{
            console.log("completed");
            
        })
    })
})
