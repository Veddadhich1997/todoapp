const express = require("express");
const { home, createTask, getTask, editTask, deleteTask } = require("../controllers/userControllers");

const router = express.Router();

router.get("/",home);
router.post("/createTask",createTask);
router.get("/getTask",getTask); 
router.put("/editTask/:id",editTask);
router.delete("/deleteTask/:id",deleteTask);

module.exports = router;