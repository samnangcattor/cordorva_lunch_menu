
function onBodyLoad() {
  document.addEventListener("deviceready", onDeviceReady,
  false);
}
function onDeviceReady() {
  navigator.notification.alert("Hello world", null, "Alert Test", "Click Me!");
}
