const readline = require("readline")
const fs = require("fs")
const http = require("http")
const { error } = require("console")


// CLASS 4 - READ INPUTS FROM TERMINAL
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("Please enter your name:", (name) => {
//     name === "leonor" ? console.log("é uma pascácia") : 
//     console.log("you entered: " + name)
//     rl.close()
// })

// rl.on('close', () => {
//     console.log("Interface closed")
//     process.exit(0)
// })


// CLASS 5 Sync

// let textIn = fs.readFileSync("./Files/input.txt", "utf-8")
// console.log(textIn)


// let content = `Data that i am inserting: ${textIn} \n Date if creation : ${new Date()}`
// fs.writeFileSync("./Files/output.txt", content)


// CLASS 7 ASYNC

// fs.readFile('./Files/start.txt','utf-8', (error1, data1) => {
//     console.log(data1)
//     fs.readFile(`./Files/${data1}.txt`,'utf-8', (error2, data2) => {
//         console.log(data2)
//         fs.readFile(`./Files/append.txt`, `utf-8`, (error3, data3) => {
//             console.log(data3)
//             fs.writeFile(`./Files/output.txt`, `${data2}\n\n${data3}\n\nCreation data ${new Date()}`, () =>{
//                 console.log(`File Written successfully`)
//             })
//         })
//     })
// })
// console.log("reading file")

const html = fs.readFileSync("./Template/index.html","utf-8")


let products = JSON.parse(fs.readFileSync("./Data/Products.json", "utf-8"))



const server = http.createServer((request,response) =>{

let path = request.url
if(path === "/" || path.toLocaleLowerCase() === `/home`){
    response.writeHead(200, {
        "Content-Type" : "text/html",
        "my-header" : "have a nice day you headers watcher!!!"
    })
    response.end(html.replace(`{{%CONTENT%}}`,`You are at homepage`))
} else if (path.toLocaleLowerCase() === "/about") {
    response.writeHead(200, {
        "Content-Type" : "text/html",
        "my-header" : "have a nice day you headers watcher!!!"
    })
    response.end(html.replace(`{{%CONTENT%}}`,`You are at About Page`))
} else if(path.toLocaleLowerCase() === `/contact`) {
    response.writeHead(200, {
        "Content-Type" : "text/html",
        "my-header" : "have a nice day you headers watcher!!!"
    })
    response.end(html.replace(`{{%CONTENT%}}`,`You are at contacts page`))
} else if (path.toLocaleLowerCase() === `/products` ){
fs.readFile("./Data/Products.json", "utf-8", (error, data) => {
    response.writeHead(200, {
        "Content-Type" : "application/json",
        "my-header" : "The data!"
    })    
    } )
    response.end("You are at Products page")
    console.log(products)
}


 else {
    response.writeHead(404, {
        "Content-Type" : "text/html",
        "my-header" : "aqui não há nada meu irmão"
    })
    response.end(html.replace(`{{%CONTENT%}}`,`Error 404: page does not exist`))
}



})



server.listen(8000, "localhost", ()=>{
    console.log("server is up and running")
})