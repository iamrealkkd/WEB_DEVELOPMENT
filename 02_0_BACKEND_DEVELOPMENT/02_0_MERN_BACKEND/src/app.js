const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());
/*
POST /notes => Create a note
GET /notes => Get all notes
DELETE /notes/:id => Delete a note
PATCH /notes/:id => Update a note
*/
app.post("/notes", async (req, res) => {
  const data = req.body; /* { title, description } */
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "note created",
  });
}); //ab array ki jgh db mai data store hoga

app.get("/notes", async (req, res) => {
  const data = req.body; /* { title, description } */
  const notes = await noteModel.find(); //[]
  res.status(200).json({
    message: "note fetched",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({ _id: id }, { description: description })

    res.status(200).json({
        message: "Note updated successfully"
    })
})

module.exports = app;

// //server create krna
// const express = require("express");

// const app = express();

// const notes = [];
// app.use(express.json());

// app.post("/notes", (req, res) => {
//   //data frontend se server mai aa rha hai
//   notes.push(req.body);
//   res.status(201).json({
//     message: "note created successfully",
//   });
// });

// //ek api bnani hai jisse user saare notes ka data frontned mai dekh paye ab isme server se frontend mai jayega

// //name same hai api ka methods alag alag hain

// app.get("/notes", (req, res) => {
//   res.status(200).json({
//     message: "notes fetched successfully",
//     notes: notes,
//   });
// });

// app.delete("/notes/:index", (req, res) => {
//   const index = req.params.index;
//   delete notes[index];
//   res.status(200).json({
//     message: "note deleted successfully",
//   });
// });
// app.patch("/notes/:index", (req, res) => {
//   const index = req.params.index;
//   const description = req.body.description;

//   notes[index].description = description;

//   res.status(200).json({
//     message: "note updated successfully",
//   });
// });
// module.exports = app;

/*
note = {
    title: "my first note",
    description: "this is my first note"
}

const notes = [
    {
        title: "my first note",
        description: "this is my first note"
    },
    {
        title: "my second note",
        description: "this is my second note"
    },
]
*/
