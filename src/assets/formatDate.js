export function formatDate(dateString) {
  const formattedDate = new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
  return formattedDate;
}
