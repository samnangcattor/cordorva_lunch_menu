function onAlert() {
  navigator.notification.alert("Hello world", null, "Alert Test", "Click Me!");
}

function onConfirm() {
  navigator.notification.confirm("Love her ?", doContinue, "Challenge Quest", "yes, no");
}

function doContinue(buttonNum) {
  navigator.notification.alert("You choose #" + buttonNum, null, "Really?", "Yes");
}
