const TodoModel = require("../models/TodoModels");

// get todo list
module.exports.getToDo = async (req, res) => {
  const toDo = await TodoModel.find();
  res.send(toDo);
};

// save todo
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  TodoModel.create({ text })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

// delete todo list with id base

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  console.log("id ---> ", _id);

  TodoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

// update todo

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  await TodoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};
