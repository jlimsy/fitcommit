export default function PlanModalCard({
  item,
  setShowEditPlanModal,
  // user,
  // setUser,
  setPlanModalCardId,
}) {
  const handleEditClick = () => {
    setShowEditPlanModal(true);
    setPlanModalCardId(item._id);
  };

  const handleDeleteClick = () => {
    setShowEditPlanModal(true);
  };

  return (
    <div className="rounded-lg grid grid-rows-2 items-center justify-between px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
      <div>
        <span className=" text-jade-500 text-xl font-bold leading-tight tracking-tight md:text-2xl">
          {item.exercise}
        </span>{" "}
        <span>{item.muscle}</span>
      </div>

      <div className="flex items-end justify-between gap-5 text-jade-700">
        Weight: {item.weight} | Reps: {item.reps} | Sets: {item.sets}{" "}
        <button className="bg-jade-500 px-1 py-1" onClick={handleEditClick}>
          Edit
        </button>{" "}
        <button className="bg-jade-500 px-1 py-1" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
