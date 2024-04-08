import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PlanModal from "./PlanModal";

export default function CalendarCard({
  plans,
  entries,
  setPlans,
  user,
  setUser,
}) {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");
  const [scheduledPlanDates, setScheduledPlanDates] = useState([]);
  const [scheduledEntriesDates, setScheduledEntriesDates] = useState([]);

  const handleClickDay = (event) => {
    // console.log("date before", date);
    setDate(event);
    // console.log("event:", event);
  };

  useEffect(() => {
    // This code will run whenever the 'date' state is updated

    if (date !== "") {
      setShowModal(true);
    }
  }, [date]);

  // change color of tile
  // PLANS

  useEffect(() => {
    const arrOfUniqueDates = (array) => {
      const arrOfDates = array.map((item) => item.date);
      let arr = [];
      for (let i = 0; i < arrOfDates.length; i++) {
        if (!arr.includes(arrOfDates[i])) {
          arr.push(arrOfDates[i]);
        }
      }

      const arrOfFormattedDates = arr.map(
        (item) => new Date(item).toISOString().split("T")[0]
      );

      return arrOfFormattedDates;
    };

    setScheduledPlanDates(arrOfUniqueDates(plans));
    setScheduledEntriesDates(arrOfUniqueDates(entries));
  }, [plans, entries]);

  console.log("scheduledDates:", scheduledPlanDates, scheduledEntriesDates);

  function dateToYYYYMMDD(inputDateString) {
    const inputDate = new Date(inputDateString);
    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = inputDate.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const tileContent = ({ date, view }) => {
    if (view === "month" && scheduledPlanDates.includes(dateToYYYYMMDD(date))) {
      return (
        <div
          style={{
            backgroundColor: "#89fa00",
            borderRadius: "50%",
            height: "10px",
            width: "10px",
          }}
        ></div>
      );
    } else if (
      view === "month" &&
      scheduledEntriesDates.includes(dateToYYYYMMDD(date))
    ) {
      return (
        <div
          style={{
            backgroundColor: "#3a6c08",
            borderRadius: "50%",
            height: "10px",
            width: "10px",
          }}
        ></div>
      );
    }
  };

  return (
    <div className=" items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full">
      <Calendar
        className="rounded-lg bg-zinc-800 justify-center p-5 m-5 text-center "
        onClickDay={handleClickDay}
        tileContent={tileContent}
        tileClassName={({ date, view }) =>
          view === "month" &&
          scheduledPlanDates.includes(date.toISOString().split("T")[0])
            ? "scheduled"
            : null
        }
      />
      <div className="flex justify-center">
        <div className="p-2">
          <span
            style={{
              backgroundColor: "#3a6c08",
              borderRadius: "50%",
              height: "10px",
              width: "10px",
              display: "inline-block",
            }}
          ></span>{" "}
          History
        </div>
        <div className="p-2">
          {" "}
          <span
            style={{
              backgroundColor: "#89fa00",
              borderRadius: "50%",
              height: "10px",
              width: "10px",
              display: "inline-block",
            }}
          ></span>{" "}
          Plans
        </div>
      </div>

      {showModal && (
        <>
          <PlanModal
            showModal={showModal}
            setShowModal={setShowModal}
            plans={plans}
            date={date}
            setPlans={setPlans}
          />
          <div className="opacity-25 fixed inset-0 z-40 bg-zinc-50"></div>
        </>
      )}
    </div>
  );
}
