const BASE_URL = "/api/plan";

export async function createPlan(body) {
  const res = await fetch(BASE_URL + "/user/65af7674dccd7f24cfa144fd", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  console.log("plans-api running");
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return json;
    // throw new Error("Create Event Error");
  }
}

// ---------- JOEY ADDED THIS TO TRY OUT BASED ON SEI NOTES ----------//
// export function addItemToPlan(itemId) {
//   return sendRequest(`${BASE_URL}/${itemId}`, "POST");
// }

// SEI notes: itemId is sent as a route parameter, instead of in the body
