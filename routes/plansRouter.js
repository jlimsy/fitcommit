const express = require("express");
const router = express.Router();

const {
  planIndex,
  planCreate,
  planDelete,
  planIndexById,
  planUpdate,
} = require("../controllers/plansController");

//user router functions for data queries
router.get("/", planIndex);
router.get("/user/:userId", planIndexById);
router.post("/user/:userId", planCreate);
router.delete("/:planId", planDelete);
router.put("/update/:planId", planUpdate);

module.exports = router;
