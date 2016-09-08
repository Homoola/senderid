// Create a top-level page that contains our UI
var page = new tabris.Page({
  title: "Hello, World!",
  topLevel: true
});

// Create a push button and add it to the page
var button = new tabris.Button({
  centerX: 0, top: 100,
  text: "Native Widgets"
}).appendTo(page);

// Create a text view and add it too
var textView = new tabris.TextView({
  centerX: 0, top: [button, 50],
  font: "24px"
}).appendTo(page);

// Change the text view's text when the button is pressed
button.on("select", function() {
  textView.set("text", "send push!");
  var pushNotification = window.plugins.pushNotification;
     pushNotification.register(
    successHandler,
    errorHandler,
    {
        "senderID":"senderid-142820",
        "ecb":"onNotification"
    });
});

function successHandler (result) {
    console.log('result = ' + result);
}
function errorHandler (result) {
    console.log('result = ' + result);
}
page.open();