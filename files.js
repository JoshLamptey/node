const fs = require('fs')

// read files
//fs.readFile('./docs/blogs.txt',(err,data)=>{
//    if(err){
//        console.log(err)
//    }
//    console.log(data.toString())
//})

//to display asynchronousity
//console.log("last line")

//  Write files
fs.writeFile('./docs/blogs2.txt',"Hello Anna",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file written successfully")
    }
})