import CalendarCard from "../../components/CalendarCard";
import { useState, useEffect } from "react";
import EntriesCard from "../../components/EntriesCard";
import { fetchAllEntriesById } from "../../utilities/entries-service";
import { fetchAllPlansById } from "../../utilities/plans-service";

export default function DashboardPage({ user }) {
  const [entries, setEntries] = useState([]);
  const [plans, setPlans] = useState([]);

  const formatDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
    return formattedDate;
  };

  useEffect(() => {
    (async function () {
      const responseEntries = await fetchAllEntriesById(user._id);
      const responsePlans = await fetchAllPlansById(user._id);
      setEntries(responseEntries);
      setPlans(responsePlans);
    })();
  }, [user._id]);

  //with some help from chatgpt
  //Sort entries by date from the newest to the oldest
  const sortedEntries = entries.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  //Take the 5 most recent days (the first 5)
  const mostRecentDays = Array.from(
    new Set(sortedEntries.map((entry) => entry.date))
  ).slice(0, 5);

  //Organize entries into arrays for each day
  const entriesByDay = {};
  sortedEntries.forEach((entry) => {
    const dateKey = entry.date;

    if (!entriesByDay[dateKey]) {
      entriesByDay[dateKey] = [];
    }
    entriesByDay[dateKey].push(entry);
  });

  // Now, entriesByDay will be an object where keys are dates and values are arrays of entries for each of the 5 most recent days
  console.log(entriesByDay);

  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="flex flex-col items-center ">
        <h1>Dashboard</h1>
        <CalendarCard plans={plans} entries={entries} setPlans={setPlans} />
      </div>

      <div className="flex flex-col items-center p-5">
        <div>
          <h1>History of the past 5 exercises</h1>
        </div>
        <div className="grid grid-rows-5 items-center justify-center ">
          {mostRecentDays.map((dateKey, idx) => (
            <div key={idx} className="px-5 py-5">
              <h1 className="mb-2 ">{formatDate(dateKey)}</h1>
              <div className="flex flex-row rounded-lg bg-zinc-800 border border-jade-700">
                {entriesByDay[dateKey]?.map((entry, entryIdx) => (
                  <EntriesCard key={entryIdx} entry={entry} user={user} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

//   return (
//     <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
//       <div className="flex flex-col items-center ">
//         <h1>Dashboard</h1>
//         <CalendarCard plans={plans} entries={entries} setPlans={setPlans} />
//       </div>
//       <div className="flex flex-col items-center p-5">
//         <h1>History of the past 5 exercises</h1>
//         <div className="grid grid-cols-5 px-6 py-8 gap-10">
//           {entries?.map((entry, idx) => (
//             <EntriesCard key={idx} entry={entry} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
