import * as entryAPI from "./entries-api";

export async function createEntry(entryFormData, id) {
  const body = {
    date: entryFormData.date,
    exercise: entryFormData.exercise,
    muscle: entryFormData.muscle,
    reps: entryFormData.reps,
    sets: entryFormData.sets,
    weight: entryFormData.weight,
  };
  console.log("id", id);
  console.log("body", body);
  const response = await entryAPI.createEntry(body, id);
  return response;
}

export async function getEntryByExercise(selectedExercise, limit, id) {
  const response = await entryAPI.getEntryByExercise(
    selectedExercise,
    limit,
    id
  );
  return response;
}

export async function fetchAllEntriesById(id) {
  const response = await entryAPI.fetchAllEntriesById(id);
  return response;
}
