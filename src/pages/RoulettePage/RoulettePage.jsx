// import { useState } from "react";
import RouletteInputBar from "../../components/RouletteInputBar";
import RouletteResults from "../../components/RouletteResults";
import exercisesByMuscle from "../../assets/exercisesByMuscle";

export default function RoulettePage({
  selectedMuscle,
  onMuscleChange,
  addToFavorites,
  user,
}) {
  // const [rouletteResults, setRouletteResults] = useState("");

  const fetchByMuscle = exercisesByMuscle.filter(
    (item) => item.muscle === selectedMuscle
  );
  console.log(fetchByMuscle);

  return (
    <section className="w-1/2 items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <RouletteInputBar
        selectedMuscle={selectedMuscle}
        onSearch={onMuscleChange}
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        {fetchByMuscle.map((item, idx) => (
          <RouletteResults
            key={idx}
            item={item}
            addToFavorites={addToFavorites}
            user={user}
          />
        ))}
      </div>
    </section>
  );
}
