const BASE_URL = "/api/favourites";

export async function createFavourite(body, id) {
  const res = await fetch(BASE_URL + "/user/" + id, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return json;
    // throw new Error("Create Event Error");
  }
}

export async function getFavouriteByUserId(id) {
  const res = await fetch(BASE_URL + "/user/" + id, {
    headers: { "Content-Type": "application/json" },
  });
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return res;
    // throw new Error("Create Event Error");
  }
}

export async function deleteFavourite(id) {
  const res = await fetch(BASE_URL + `/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return json;
    // throw new Error("Create Event Error");
  }
}
