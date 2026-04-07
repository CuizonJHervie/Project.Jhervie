const monthYear = document.getElementById("monthYear");
const daysContainer = document.getElementById("days");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  daysContainer.innerHTML = "";

  monthYear.innerText = date.toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  // empty slots
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    daysContainer.appendChild(empty);
  }

  // days
  for (let i = 1; i <= lastDate; i++) {
    const day = document.createElement("div");
    day.innerText = i;

    // highlight today
    const today = new Date();
    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      day.classList.add("today");
    }

    daysContainer.appendChild(day);
  }
}

// buttons
prev.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

next.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

// initial load
renderCalendar();