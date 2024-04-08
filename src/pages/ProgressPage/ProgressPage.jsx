import ProgressChart from "../../components/ProgressChart";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressSearchBar from "../../components/ProgressSearchBar";
import { getEntryByExercise } from "../../utilities/entries-service";

export default function ProgressPage({ user }) {
  const [defaultOption, setDefaultOption] = useState("Bench Press"); // Set the default value here
  const [selectedExercise, setSelectedExercise] = useState("");
  const [progressData, setProgressData] = useState([]);
  const navigate = useNavigate();
  const limit = 7;
  // Lifted state from child ProgressSearchBar

  useEffect(() => {
    (async function () {
      const response = await getEntryByExercise(defaultOption, limit, user._id);
      setProgressData(response);
    })();
  }, [defaultOption, limit, user._id]);

  const handleSearch = async () => {
    console.log("app page:", selectedExercise);
    const response = await getEntryByExercise(
      selectedExercise,
      limit,
      user._id
    );

    setProgressData(response);

    console.log(
      "response:",
      response,
      "exercise:",
      selectedExercise,
      limit,
      user._id
    );

    setProgressData(response);
  };

  // use effect to fetch defaul chart

  // this click directs user to the EntriesPage
  const handleClick = () => {
    navigate("/progress/new");
  };

  return (
    <section className="w-1/2 items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <ProgressSearchBar
        handleSearch={handleSearch}
        selectedExercise={selectedExercise}
        setSelectedExercise={setSelectedExercise}
        defaultOption={defaultOption}
      />
      <div className="h-full">
        <ProgressChart
          progressData={progressData}
          defaultOption={defaultOption}
        />
      </div>
      <button className="bg-jade-500" onClick={handleClick}>
        Add new entry
      </button>
    </section>
  );
}
