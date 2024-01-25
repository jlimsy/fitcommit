import * as favouriteAPI from "./favourites-api";

export async function createFavourite(name, muscle, img, id) {
  const body = {
    exercise: name,
    muscle: muscle,
    img: img,
  };

  const response = await favouriteAPI.createFavourite(body, id);
  return response;
}

export async function getFavouriteByUserId(id) {
  const response = await favouriteAPI.getFavouriteByUserId(id);
  return response;
}

export async function deleteFavourite(id) {
  const response = await favouriteAPI.deleteFavourite(id);
  return response;
}
