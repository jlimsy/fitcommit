const Favourite = require("../models/Favourite");

//function to create new favourite data
const favouriteCreate = async (req, res) => {
  const { userId } = req.params;
  const data = { ...req.body, userId };
  try {
    const createdFavourite = await Favourite.create(data);
    res.json({ createdFavourite });
  } catch (error) {
    console.error(
      "error in favouriteCreate function in favouriteController file",
      error
    );
    res.status(500).json({ error: "favouriteCreate Internal Server Error" });
  }
};

//function to get all favourite data
const favouriteIndex = async (req, res) => {
  try {
    const favourites = await Favourite.find({});
    res.json({ favourites });
  } catch (error) {
    console.error(
      "error in favouriteIndex function in favouritesController file",
      error
    );
    res.status(500).json({ error: "favouriteIndex Internal Server Error" });
  }
};

//function to get all favourite data by UserId
const favouriteIndexByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const favourites = await Favourite.find({ userId: userId });
    res.json({ favourites });
  } catch (error) {
    console.error(
      "error in favouriteIndex function in favouritesController file",
      error
    );
    res.status(500).json({ error: "favouriteIndex Internal Server Error" });
  }
};

//function to delete a favourite data by favouriteId
const favouriteDelete = async (req, res) => {
  const { favouriteId } = req.params;
  try {
    const deletedFavourite = await Favourite.findById(favouriteId);
    //find if entry exists, return error 404 if entry doesn't exist
    if (!deletedFavourite) {
      return res.status(404).json({ error: "Entry not found" });
    }
    //check if user deleting is the owner of the favourite data, if it isn't prevent deletion
    // if (!deletedFavourite.userId === userId) {
    //   return res.status(403).json({ error: "Unauthorised User Request" });
    // }
    await Favourite.findByIdAndDelete(favouriteId);
    res.json({ deletedFavourite });
  } catch (error) {
    console.error(
      "error in favouriteDelete function in favouriteController file",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  favouriteIndex,
  favouriteCreate,
  favouriteDelete,
  favouriteIndexByUserId,
};
