const express = require('express');
const { getToDo, saveToDo, deleteToDo, updateToDo } = require('../controllers/TodoController');

const router = express.Router();


router.get("/", getToDo);
router.post("/save",saveToDo);
router.post("/delete",deleteToDo);
router.post("/update",updateToDo);




module.exports = router;