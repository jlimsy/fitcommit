import { useEffect, useState } from "react";
import { getEntryByExercise } from "../utilities/entries-service";

export default function ProgressSearchBar({
  handleSearch,
  defaultOption,
  selectedExercise,
  setSelectedExercise,
  user,
  setUser,
}) {
  const handleSubmit = (event) => {
    //prevent a full page reload
    console.log("disabled");
    event.preventDefault();
  };

  const handleSelectChange = (event) => {
    setSelectedExercise(event.target.value);
    console.log("etv-", event.target.value);
  };

  const handleClick = async () => {
    handleSearch();
    console.log("selectedExercise-", selectedExercise);
  };

  return (
    <section className="px-6 py-8">
      <h1>Search by exercise:</h1>
      <form
        className="grid grid-cols-2 gap-10 items-center justify-center mx-auto lg:py-0"
        onSubmit={handleSubmit}
      >
        <select
          id="muscle-group"
          className="bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg focus:ring-jade-500 focus:border-jade-500 block w-full p-2.5"
          value={selectedExercise}
          onChange={handleSelectChange}
        >
          <option value="Bench Press">Bench Press</option>
          <option value="Bicep Curl">Bicep Curl</option>
          <option value="Leg Press">Leg Press</option>
          <option value="Tricep Push Down">Tricep Push Down</option>
        </select>

        <button
          type="submit"
          className=" bg-jade-500 block w-full p-2.5"
          onClick={handleClick}
        >
          Search
        </button>
      </form>
    </section>
  );
}
