import { useEffect, useState } from "react";
import { updatePlan } from "../utilities/plans-service";

export default function EditPlanModal({
  date,
  showModal,
  setShowModal,
  setShowEditPlanModal,
  // user,
  // setUser,
  planModalCardId,
  setPlans,
  plans,
}) {
  const [entryFormData, setEntryFormData] = useState({
    date: "",
    exercise: "",
    muscle: "",
    reps: "",
    sets: "",
    weight: "",
  });

  const formatDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
    return formattedDate;
  };

  const handleChange = (evt) => {
    setEntryFormData({
      ...entryFormData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleEditClick = async () => {
    console.log("id", planModalCardId);
    const response = await updatePlan(planModalCardId, entryFormData);
    const Index = plans.findIndex((plan) => plan._id == planModalCardId);
    let newPlans = [...plans];
    newPlans[Index] = response.updatingPlan;
    setPlans(newPlans);
    setShowEditPlanModal(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleCloseModal = () => {
    setShowEditPlanModal(false);
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg bg-zinc-900 shadow">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <h1>Edit Workout</h1>
            <button
              type="button"
              className="text-zinc-50 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={handleCloseModal}
            >
              X<span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <h2>{formatDate(date)}</h2>
          </div>
          <form
            className="space-y-4 md:space-y-6 m-5 pb-5"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  htmlFor="workout-name"
                  className="block mb-2 text-sm font-medium"
                >
                  Name of workout:
                </label>

                <input
                  type="text"
                  name="exercise"
                  id="exercise"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Bench Press"
                  value={entryFormData.exercise}
                  onChange={handleChange}
                  required=""
                />
              </div>{" "}
              <div>
                <label
                  htmlFor="workout-muscle"
                  className="block mb-2 text-sm font-medium"
                >
                  Muscle
                </label>
                <select
                  id="muscle"
                  name="muscle"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg focus:ring-jade-500 focus:border-jade-500 block w-full p-2.5"
                  value={entryFormData.muscle}
                  onChange={handleChange}
                >
                  <option value="Arms">Arms</option>
                  <option value="Back">Back</option>
                  <option value="Chest">Chest</option>
                  <option value="Legs">Legs</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div>
                <label
                  htmlFor="weight"
                  className="block mb-2 text-sm font-medium"
                >
                  Weight:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    placeholder="20"
                    className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    value={entryFormData.weight}
                    onChange={handleChange}
                    required=""
                  />
                  kg
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Repetitions:
                </label>
                <input
                  type="number"
                  name="reps"
                  id="reps"
                  placeholder="10"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={entryFormData.reps}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="sets"
                  className="block mb-2 text-sm font-medium"
                >
                  Sets:
                </label>
                <input
                  type="number"
                  name="sets"
                  id="sets"
                  placeholder="4"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={entryFormData.sets}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-jade-500"
                onClick={handleEditClick}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
