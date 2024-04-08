const today = new Date();

const progressData = [
  {
    date: today.getDate() - 7,
    exercise: "Bench Press",
    minWeight: 20,
    maxWeight: 40,
  },
  {
    date: today.getDate() - 6,
    exercise: "Bench Press",
    minWeight: 25,
    maxWeight: NaN,
  },
  {
    date: today.getDate() - 5,
    exercise: "Bench Press",
    minWeight: 25,
    maxWeight: 50,
  },
  {
    date: today.getDate() - 4,
    exercise: "Bench Press",
    minWeight: 27.5,
    maxWeight: 55,
  },
  {
    date: today.getDate() - 3,
    exercise: "Bench Press",
    minWeight: 25,
    maxWeight: 60,
  },
  {
    date: today.getDate() - 2,
    exercise: "Bench Press",
    minWeight: 25,
    maxWeight: NaN,
  },
  {
    date: today.getDate() - 1,
    exercise: "Bench Press",
    minWeight: 25,
    maxWeight: 45,
  },
  {
    date: today.getDate(),
    exercise: "Bench Press",
    minWeight: 25,
    maxWeight: 50,
  },
];

export { progressData };
