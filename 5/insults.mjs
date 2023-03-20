import fs from 'fs'

fs.promises.readFile("insults.json", "utf8")
    .then(res => {
        const insults = JSON.parse(res).insults
        console.log("Insults:")
        for(let i = 0; i < insults.length; i++) {
            console.log(`${i + 1}. ${insults[i].insult.trim()} - ${insults[i].play}`)
        }
    })
    .catch(err => console.log(err))