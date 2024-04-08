import { useState } from "react";
import { createPlan } from "../utilities/plans-service";

export default function AddToCalendarModal({
  setShowModal,
  user,
  exercise,
  muscle,
}) {
  const [planFormData, setPlanFormData] = useState({
    date: "",
    exercise: "",
    muscle: "",
    reps: "",
    sets: "",
    weight: "",
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectDate = (evt) => {
    setPlanFormData({ ...planFormData, [evt.target.name]: evt.target.value });
  };

  const handleAddToPlan = async () => {
    //code to add to plansSchema
    console.log("muscle&exercise", muscle, exercise);
    console.log("beforePFDATA", planFormData);
    setPlanFormData({
      ...planFormData,
      muscle,
      exercise,
    });
    console.log("afterPFDATA", planFormData);
    console.log(user._id);
    const response = await createPlan(planFormData, user._id);

    console.log(response);
    setShowModal(false);
  };

  const handleChange = (evt) => {
    setPlanFormData({
      ...planFormData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg bg-zinc-900 shadow">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <h1>Add to Calendar</h1>
            <button
              type="button"
              className="text-zinc-50 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={handleCloseModal}
            >
              X<span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="space-y-4 p-4 md:p-5 " onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 text-left">
                <label className="block mb-2 text-sm font-medium">
                  Pick a date:
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                  value={planFormData.date}
                  onChange={handleSelectDate}
                />
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
                    value={planFormData.weight}
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
                  value={planFormData.reps}
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
                  value={planFormData.sets}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <button
                type="button"
                className="text-white inline-flex items-center bg-jade-500 hover:bg-jade-800 focus:ring-4 focus:outline-none focus:ring-zeal-300 font-medium rounded-lg px-5 py-2.5 text-center"
                onClick={handleAddToPlan}
              >
                Add to Calendar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
