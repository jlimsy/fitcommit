export default function EntriesCard({ entry, user, setUser }) {
  // const formatDate = (dateString) => {
  //   const formattedDate = new Date(dateString).toLocaleDateString("en-GB", {
  //     day: "numeric",
  //     month: "short",
  //     year: "2-digit",
  //   });
  //   return formattedDate;
  // };

  return (
    <>
      <div className="rounded-lg text-sm px-5 py-2.5">
        {/* <h1>{formatDate(entry.date)}</h1> */}
        <h2>{entry.exercise}</h2>
        <p>{entry.weight} kg</p>
      </div>
    </>
  );
}
