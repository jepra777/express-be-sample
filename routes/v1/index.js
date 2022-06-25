const v1 = require("express").Router()

v1.get("/", (req,res) => res.send("JePra API Version 1.0"))
v1.get("/users/", (req, res) => {
    res.status(200).json({
        "node": 1,
        "users": [
        {
            "name": "Jeremiah Prasetyo",
            "birthDate": "03 Januari 1999",
            "sex": "Man"
        },
        {
            "name": "Surya Prasetyo",
            "birthDate": "05 Maret 2027",
            "sex": "Man"
        },
        {
            "name": "Bulan Prasetyo",
            "birthDate": "03 September 2028",
            "sex": "Woman"
        }
    ]})
})

module.exports = v1