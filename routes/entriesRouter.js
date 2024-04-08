const express = require("express");
const router = express.Router();

const {
  entryIndex,
  entryCreate,
  entryDelete,
  entryIndexByExercise,
  entryIndexById,
} = require("../controllers/entriesController");

//user router functions for data queries
router.get("/", entryIndex);
router.get("/user/:userId", entryIndexById);
router.post("/user/:userId", entryCreate);
router.delete("/:entryId", entryDelete);
router.get("/exercise/:exerciseName/:limit/:userId", entryIndexByExercise);

module.exports = router;
