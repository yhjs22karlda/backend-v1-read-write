import fs from "fs"
import readline from "readline"
async function makeFile() {
    const rl = readline.promises.createInterface({input:process.stdin, output:process.stdout})
    const filename = await rl.question("Filnamn: ")
    const content = await rl.question("Innehåll: ")
    rl.close()
    fs.writeFile(filename, content, err => {
        if(err) console.log(err) 
        else console.log("done!")
    })
}
makeFile()




// async function makeFile2() {
//     let filename = null 
//     let content = null
//     console.log("Filnamn?")
//     for await (let chunk of process.stdin) {
//         filename = chunk
//         break
//     }
//     filename = filename.toString().trim()
//     console.log("Content?")
//     process.stdin.end()
//     for await (let chunk of process.stdin) {
//         content = chunk
//         break
//     }
//     console.log(content)
//     // content = content.toString().trim()
//     fs.writeFile(filename, content, err => {
//         if(err) {
//             console.log(err)
//         } else {
//             console.log(`File: ${filename} created`)
//         }
//     })
// }
// makeFile2()

// async function readIn() {
//     const chunks = []
//     for await(const chunk of process.stdin) {
//         console.log(chunk.toString())
//         // if(chunk.toString().trim() === "a") break
//         chunks.push(chunk)
//         break
//     }
//     // process.stdin.end()
//     return Buffer.concat(chunks).toString("utf8")
// }
