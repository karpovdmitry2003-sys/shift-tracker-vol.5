function renderCalendar() {
  const el = document.getElementById("calendar");
  el.innerHTML = "";

  const data = Storage.get();

  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const days = new Date(y, m + 1, 0).getDate();

  for (let i = 1; i <= days; i++) {
    const date = `${y}-${m + 1}-${i}`;
    const shift = data.find(s => s.date === date);

    const div = document.createElement("div");
    div.className = "day";

    if (shift) div.classList.add(shift.type);

    div.textContent = i;
    el.appendChild(div);
  }
}
