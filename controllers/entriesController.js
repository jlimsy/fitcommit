const Entry = require("../models/Entry");

//function to create new entry data
const entryCreate = async (req, res) => {
  const { userId } = req.params;
  const data = { ...req.body, userId };
  console.log("entryCreate running", data, userId);
  try {
    const createdEntry = await Entry.create(data);
    res.json({ createdEntry });
  } catch (error) {
    console.error(
      "error in entryCreate function in entryController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to get all entry data
const entryIndex = async (req, res) => {
  try {
    const entries = await Entry.find({});
    res.json({ entries });
  } catch (error) {
    console.error(
      "error in entryIndex function in entryController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const entryIndexByExercise = async (req, res) => {
  const { exerciseName, limit, userId } = req.params;
  //create regular expression to make case insensitive name
  const insensitiveExerciseName = new RegExp(exerciseName, "i");
  //search for the data, sort by date then pull with the given limit
  try {
    const exerciseEntries = await Entry.find({
      userId: userId,
      exercise: { $regex: insensitiveExerciseName },
    })
      .sort({ date: -1 })
      .limit(limit);
    res.json(exerciseEntries);
  } catch (error) {
    console.error(
      "error in entryIndexByExercise function in entryController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to delete an entry data by entryId
const entryDelete = async (req, res) => {
  const { entryId } = req.params;
  try {
    const deletedEntry = await Entry.findById(entryId);
    //find if entry exists, return error 404 if entry doesn't exist
    if (!deletedEntry) {
      return res.status(404).json({ error: "Entry not found" });
    }
    //check if user deleting is the owner of the entry, if it isn't prevent deletion
    // if (!deletedEntry.userId === userId) {
    //   return res.status(403).json({ error: "Unauthorised User Request" });
    // }
    await Entry.findByIdAndDelete(entryId);
    res.json({ msg: "Entry successfully deleted" });
  } catch (error) {
    console.error(
      "error in entryDelete function in entryController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const entryIndexById = async (req, res) => {
  const { userId } = req.params;
  try {
    const Entries = await Entry.find({
      userId: userId,
    }).sort({ date: -1 });
    res.json(Entries);
  } catch (error) {
    console.error(
      "error in entryIndexById function in entryController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  entryIndex,
  entryCreate,
  entryDelete,
  entryIndexByExercise,
  entryIndexById,
};
