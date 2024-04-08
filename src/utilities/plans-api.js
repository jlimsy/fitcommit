const BASE_URL = "/api/plan";

export async function createPlan(body, id) {
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

export async function fetchAllPlansById(id) {
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

export async function updatePlan(planId, body) {
  const res = await fetch(BASE_URL + "/update/" + planId, {
    method: "PUT",
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

// ---------- JOEY ADDED THIS TO TRY OUT BASED ON SEI NOTES ----------//
// export function addItemToPlan(itemId) {
//   return sendRequest(`${BASE_URL}/${itemId}`, "POST");
// }

// SEI notes: itemId is sent as a route parameter, instead of in the body
