
const express = require("express")
const router = express.Router()
const List = require("../schemas/List")


router.get("/", (req, res) => {
    List.find({}, (data, err) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(data)
        }
    })
})


router.get("/:title", (req, res) => {

    List.find({}, (data, err) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(data)
        }
    }
    )
})
function generateId(size) {
    var id = ""
    for (let index = 0; index < size; index++) {
        if (Math.floor(Math.random() * 3) === 0) {
            id += String.fromCharCode(Math.floor(Math.random() * 10) + 48)
        }
        else if (Math.floor(Math.random() * 3) === 1) {
            id += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        }
        else {
            id += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        }
    }
    return id
}
router.post("/addList", async (req, res) => {
    const newOne = new List({
        title: req.body.title,
        description: req.body.description,
        id: generateId(40)
    })
    newOne.save().then(() => {
        res.json({
            success: "yeah created"
        })
    })
})


module.exports = router