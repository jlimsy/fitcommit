import { useState } from "react";

export default function RouletteInputBar({ onSearch, user, setUser }) {
  const [selectedMuscle, setSelectedMuscle] = useState("Arms");
  // const [searchErrorMsg, setSearchErrorMsg] = useState({ error: "" });
  // const [rouletteResults, setRouletteResults] = useState([]);

  const handleSelectChange = (event) => {
    console.log(`${event.target.value} is selected`);
    setSelectedMuscle(event.target.value);
  };

  // const handleClick = () => {b
  //   // alert("Search by muscle group button");
  // };

  const handleSubmit = (event) => {
    //prevent a full page reload
    event.preventDefault();
    console.log(selectedMuscle);
    onSearch(selectedMuscle);
  };

  return (
    <section className="px-6 py-8">
      <h1>Search by muscle group:</h1>
      <form
        className="grid grid-cols-2 gap-10 items-center justify-center mx-auto lg:py-0"
        onSubmit={handleSubmit}
      >
        {/* <label
          htmlFor="default-search"
          className="text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label> */}

        <select
          id="muscle-group"
          className="bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg focus:ring-jade-500 focus:border-jade-500 block w-full p-2.5"
          onChange={handleSelectChange}
        >
          <option value="Arms">Arms</option>
          <option value="Back">Back</option>
          <option value="Chest">Chest</option>
          <option value="Legs">Legs</option>
        </select>

        <button
          type="submit"
          className=" bg-jade-500 block w-full p-2.5"
          // onClick={handleClick}
        >
          Search
        </button>
      </form>
    </section>
  );
}
