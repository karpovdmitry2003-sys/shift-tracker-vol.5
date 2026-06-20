function updateStats() {
  const data = Storage.get();

  const dayRate = Number(document.getElementById("dayRate").value || 0);
  const nightRate = Number(document.getElementById("nightRate").value || 0);

  let hours = 0;
  let money = 0;

  data.forEach(s => {
    if (s.type === "off") return;

    hours += 8;

    if (s.type === "day") money += 8 * dayRate;
    if (s.type === "night") money += 8 * nightRate;
  });

  document.getElementById("totalHours").innerText = "Часы: " + hours;
  document.getElementById("totalMoney").innerText = "€ " + money.toFixed(2);
}
