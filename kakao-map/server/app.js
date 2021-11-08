const express = require("express")
const path = require("path")
const app = express();

app.listen(8080, () => {
    console.log("listening 8080 port")
})

app.use(express.static(path.join(__dirname, "../")))

app.get("/", (req, res) => {
    res.render("index.html")
})