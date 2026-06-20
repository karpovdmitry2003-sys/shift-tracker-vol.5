function exportCSV() {
  const data = Storage.get();

  let csv = "date,type,hours\n";

  data.forEach(s => {
    csv += `${s.date},${s.type},8\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "shifts.csv";
  a.click();
}
