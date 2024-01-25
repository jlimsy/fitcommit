import EditPlanModal from "./EditPlanModal";
import { useState } from "react";
import PlanModalCard from "./PlanModalCard";

export default function PlanModal({
  plans,
  showModal,
  setShowModal,
  date,
  // user,
  // setUser,
  setPlans,
}) {
  const [showEditPlanModal, setShowEditPlanModal] = useState(false);
  const [planModalCardId, setPlanModalCardId] = useState("");

  //Multiple functions to set date field
  const fDate = new Date(date);
  fDate.setUTCHours(0, 0, 0, 0);
  fDate.setUTCDate(fDate.getUTCDate() + 1);
  const clickedDate = fDate.toISOString();

  const dateToMatch = (plans) => {
    return plans.filter((plan) => {
      return plan.date === clickedDate;
    });
  };
  const plansForSelectedDay = dateToMatch(plans);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const formatDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
    return formattedDate;
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg bg-zinc-900 shadow">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <h1>Workout Plan</h1>

            <button
              type="button"
              className="text-zinc-50 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={handleCloseModal}
            >
              X<span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <div className=" mb-2">
              <h2>{formatDate(date)}</h2>
            </div>

            {plansForSelectedDay.map((item, idx) => (
              <PlanModalCard
                key={idx}
                item={item}
                setShowEditPlanModal={setShowEditPlanModal}
                setPlanModalCardId={setPlanModalCardId}
              />
            ))}
          </div>
        </div>
      </div>{" "}
      {showEditPlanModal && (
        <>
          <EditPlanModal
            showModal={showModal}
            setShowModal={setShowModal}
            setShowEditPlanModal={setShowEditPlanModal}
            date={date}
            planModalCardId={planModalCardId}
            setPlans={setPlans}
            plans={plans}
          />
          <div className="opacity-25 fixed inset-0 z-40 bg-zinc-50"></div>
        </>
      )}
    </div>
  );
}
