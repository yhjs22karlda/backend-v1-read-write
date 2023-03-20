const fs = require("fs")

const quote = "Why, sometimes I've believed as many as six impossible things before breakfast."

fs.writeFile("alicequotes.txt", quote, err => {
    if(err) {
        console.log(err)
    } else {
        console.log("File created")
    } 
})