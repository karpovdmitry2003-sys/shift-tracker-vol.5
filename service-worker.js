self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

self.addEventListener("push", event => {
  self.registration.showNotification("Shift Tracker", {
    body: "Reminder"
  });
});
