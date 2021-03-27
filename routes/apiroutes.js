const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../db/db.json")


router.get('/notes', (req, res) => {
    fs.readFile(dbPath, "utf8", function(err, data){
        res.json(JSON.parse(data))
    })

});

router.post('/notes', (req, res) => {
    const note = req.body;

    fs.readFile(dbPath, "utf8", function(err, data){
        const notes = (JSON.parse(data))
        note.id = notes.length + "" + Math.random()
        notes.push(note);
        fs.writeFileSync("db/db.json", JSON.stringify(notes));
        res.json(note);
    })
});

// router.post("/delete/:id", async (req, res) => {
//     const result = await Notification.findByIdAndDelete(req.note.id);
//     res.redirect("back");
//   });

// async.createNewRecord(attributes);{
//     attributes.id = this.generateUniqueID()
// };
// target note by id
// /notes/:id
// UUID npm package
// Include a filter that returns the array that includes everything but that specific deleted ID

module.exports = router