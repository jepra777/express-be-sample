const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./routes")
const cookieParser = require('cookie-parser')
const PORT = 3001 | process.env.PORT

var corsOpts = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())

app.use(cors(corsOpts))

app.use(router)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
}) 