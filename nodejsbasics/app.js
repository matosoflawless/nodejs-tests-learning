//CORE MODULES

const readline = require("readline")
const fs = require("fs")
const http = require("http")
const { error } = require("console")
const url = require("url")
const events = require("events")

//USER DEFINED MODULES
const replaceHtml = require("./Modules/replaceHtml")
const user = require("./Modules/user")


// // CLASS 4 - READ INPUTS FROM TERMINAL
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("Please enter your name:", (name) => {
//     name === "leonor" ? console.log("A Leonor é a venerada da Pipoca e da Luz porque lhe deu de comer! A Leonor já devia estar a fazer os deveres de casa!!!") : 
//     console.log("O teu nome é : " + name)
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

// const html = fs.readFileSync("./Template/index.html", "utf-8")


// let products = JSON.parse(fs.readFileSync("./Data/Products.json", "utf-8"))
// let productsListHtml = fs.readFileSync("./Template/product-list.html", "utf-8")
// let productsDetailHtml = fs.readFileSync("./Template/product-details.html", "utf-8")



// function replaceHtml(template, product) {

//         let output = template.replace("{{%IMAGE%}}", product.productImage)
//         output = output.replace("{{%NAME%}}", product.name)
//         output = output.replace("{{%MODELNAME%}}", product.modelName)
//         output = output.replace("{{%MODELNO%}}", product.modelNumber)
//         output = output.replace("{{%SIZE%}}", product.size)
//         output = output.replace("{{%CAMERA%}}", product.camera)
//         output = output.replace("{{%PRICE%}}", product.price)
//         output = output.replace("{{%COLOR%}}", product.color)
//         output = output.replace("{{%ID%}}", product.id)
//         output = output.replace("{{%ROM%}}", product.ROM)
//         output = output.replace("{{%DESC%}}", product.Description)

//         return output

// }

// const server = http.createServer((request, response) => {
//     let {query, pathname: path} =url.parse(request.url,true)
// // console.log(x)
//     // let path = request.url
//     if (path === "/" || path.toLocaleLowerCase() === `/home`) {
//         response.writeHead(200, {
//             "Content-Type": "text/html",
//             "my-header": "have a nice day you headers watcher!!!"
//         })
//         response.end(html.replace(`{{%CONTENT%}}`, `You are at homepage`))
//     } else if (path.toLocaleLowerCase() === "/about") {
//         response.writeHead(200, {
//             "Content-Type": "text/html",
//             "my-header": "have a nice day you headers watcher!!!"
//         })
//         response.end(html.replace(`{{%CONTENT%}}`, `You are at About Page`))
//     } else if (path.toLocaleLowerCase() === `/contact`) {
//         response.writeHead(200, {
//             "Content-Type": "text/html",
//             "my-header": "have a nice day you headers watcher!!!"
//         })
//         response.end(html.replace(`{{%CONTENT%}}`, `You are at contacts page`))
//     } else if (path.toLocaleLowerCase() === `/products`) {
//         if (!query.id){
//            let productHtmlArray = products.map((prod) => {
//             return replaceHtml(productsListHtml, prod)
//             })
//         let productResponseHtml = html.replace("{{%CONTENT%}}", productHtmlArray.join(","))
//         response.writeHead(200, {"Content-Type": "text/html" })
//         response.end(productResponseHtml)
//         } else {
//             let prod = products[query.id]
//             let productDetailResponseHtml = replaceHtml(productsDetailHtml, prod)
//             response.end(html.replace("{{%CONTENT%}}", productDetailResponseHtml))
//         } 

//     }


//     else {
//         response.writeHead(404, {
//             "Content-Type": "text/html",
//             "my-header": "aqui não há nada meu irmão"
//         })
//         response.end(html.replace(`{{%CONTENT%}}`, `Error 404: page does not exist`))
//     }



// })
const server = http.createServer()

// server.on("request",(request,response)=>{
//     let {query, pathname: path} =url.parse(request.url,true)
//     // console.log(x)
//         // let path = request.url
//         if (path === "/" || path.toLocaleLowerCase() === `/home`) {
//             response.writeHead(200, {
//                 "Content-Type": "text/html",
//                 "my-header": "have a nice day you headers watcher!!!"
//             })
//             response.end(html.replace(`{{%CONTENT%}}`, `You are at homepage`))
//         } else if (path.toLocaleLowerCase() === "/about") {
//             response.writeHead(200, {
//                 "Content-Type": "text/html",
//                 "my-header": "have a nice day you headers watcher!!!"
//             })
//             response.end(html.replace(`{{%CONTENT%}}`, `You are at About Page`))
//         } else if (path.toLocaleLowerCase() === `/contact`) {
//             response.writeHead(200, {
//                 "Content-Type": "text/html",
//                 "my-header": "have a nice day you headers watcher!!!"
//             })
//             response.end(html.replace(`{{%CONTENT%}}`, `You are at contacts page`))
//         } else if (path.toLocaleLowerCase() === `/products`) {
//             if (!query.id){
//                let productHtmlArray = products.map((prod) => {
//                 return replaceHtml(productsListHtml, prod)
//                 })
//             let productResponseHtml = html.replace("{{%CONTENT%}}", productHtmlArray.join(","))
//             response.writeHead(200, {"Content-Type": "text/html" })
//             response.end(productResponseHtml)
//             } else {
//                 let prod = products[query.id]
//                 let productDetailResponseHtml = replaceHtml(productsDetailHtml, prod)
//                 response.end(html.replace("{{%CONTENT%}}", productDetailResponseHtml))
//             } 

//         }


//         else {
//             response.writeHead(404, {
//                 "Content-Type": "text/html",
//                 "my-header": "aqui não há nada meu irmão"
//             })
//             response.end(html.replace(`{{%CONTENT%}}`, `Error 404: page does not exist`))
//         }


// })


server.listen(8000, "localhost", () => {
    console.log("server is up and running")
})


// let myEmitter = new user()

// myEmitter.on("userCreated", (id, name) => {
//     console.log(`New user ${name} with ID ${id} is created`)
// })

// myEmitter.on("userCreated", (id, name) => {
//     console.log(`New user ${name} with ID ${id} is created in the database`)
// })
// myEmitter.emit("userCreated", 101, "John")


//Streams pratice
//SOLUTION 1 : WITHOUT READABLE OF WRITABLE STREAM
// server.on("request", (req,res) => {
//     fs.readFile("./Files/large-file.txt", (err,data) =>{
//         if(err){
//             res.end("Something went wrong")
//             return
//         }
//         res.end(data)
//     })
// } )


//SOLUTION 2: USING READABLE AND WRITABLE STREAM
// server.on("request", (req, res) => {
//     let rs = fs.createReadStream("./Files/large-file.txt")

//     rs.on(`data`, (chunk) => {
//         res.write(chunk)
//     })
//     rs.on("end", () => {
//         res.end()
//     })


//     rs.on("error", (error) => {
//         res.end(error.message)
//     })
// })


//SOLUTION 3 USING PIPE METHOD
server.on("request", (req,res) =>{
let rs = fs.createReadStream("./Files/large-file.txt")
    rs.pipe(res)
    //readableSource.pipe(writableStream)
})