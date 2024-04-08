const BASE_URL = "/api/entries";

export async function createEntry(body, id) {
  const res = await fetch(BASE_URL + "/user/" + id, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return res;
    // throw new Error("Create Event Error");
  }
}

export async function getEntryByExercise(exercise, limit, id) {
  // console.log("entries-api", exercise);
  const res = await fetch(BASE_URL + `/exercise/${exercise}/${limit}/${id}`, {
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

export async function fetchAllEntriesById(id) {
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
