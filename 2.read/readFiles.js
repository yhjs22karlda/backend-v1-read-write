const fs = require("fs")
// prefix f: tar fd/FileHandle isf filnamn
// prefix l: följer inte link utan agerar på den

// Synkront
const textSyncBuff = fs.readFileSync("text.txt")
console.log("text 1 (readFileSync):",textSyncBuff)
const textSyncStr = fs.readFileSync("text.txt", "utf8")
process.stdout.write(`text 2 (readFileSync, utf8): ${textSyncStr}`)

// Callback
let textCallBack
fs.readFile("text.txt", "utf-8", (err, text) => {
    if(err) {
        console.log(err)
    } else {
        textCallBack = text
        process.stdout.write(`text 3 (readFile, callback): ${text}`)
    }
})
process.stdout.write(`text 3 (för tidig): ${textCallBack}\n`) // undifined, filen inte inläst ännu

// Promises
fs.promises.readFile("text.txt", "utf8")
    .then(text => process.stdout.write(`text 4 (promises.readFile): ${text}`))
    .catch(err => console.log(err))

async function processText() {
    const textProm = await fs.promises.readFile("text.txt", "utf8")
    process.stdout.write(`text 5 (promises.readFile, async func): ${textProm}`)
}
processText()

// createReadStream
fs.createReadStream("text.txt", "utf8").pipe(process.stdout)

// read

process.stdout.write("text 7 (read, callback): ")
fs.open("text.txt", (err, filediscriptor) => {
    if(err) {
        console.log(err)
        return
    } 
    try {
        fs.read(filediscriptor, Buffer.alloc(10), 0, 10, 2, (err, bytesRead, buffer) => {
            process.stdout.write(`Byte 2-11 in text.txt: `)
            console.log(buffer)
        })
    } finally {
        fs.close(filediscriptor)
    }
})