import fs from "fs"

fs.readFile("styles.css", "utf8", (err, text) => {
    if(err) {
        console.log(err)
    } else {
        const ids = text.split("#").length - 1
        console.log(`Antal '#' är: ${ids}`)
    }
})