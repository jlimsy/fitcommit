import CalendarCard from "../../components/CalendarCard";
import { useState, useEffect } from "react";
import EntriesCard from "../../components/EntriesCard";
import { fetchAllEntriesById } from "../../utilities/entries-service";
import { fetchAllPlansById } from "../../utilities/plans-service";

export default function DashboardPage({ user }) {
  const [entries, setEntries] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    (async function () {
      const responseEntries = await fetchAllEntriesById(user._id);
      const responsePlans = await fetchAllPlansById(user._id);
      console.log("entries", responseEntries);
      console.log("plans", responsePlans);
      setEntries(responseEntries);
      setPlans(responsePlans);
    })();
  }, [user._id]);

  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="flex flex-col items-center ">
        <h1>Dashboard</h1>
        <CalendarCard plans={plans} entries={entries} setPlans={setPlans} />
      </div>
      <div className="flex flex-col items-center p-5">
        <h1>History of the past 5 exercises</h1>
        <div className="grid grid-cols-5 px-6 py-8 gap-10">
          {entries?.map((entry, idx) => (
            <EntriesCard key={idx} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
