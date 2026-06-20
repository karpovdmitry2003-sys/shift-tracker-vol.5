const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("shifts") || "[]");
  },

  save(shift) {
    const data = Storage.get();
    data.push(shift);
    localStorage.setItem("shifts", JSON.stringify(data));
  }
};
