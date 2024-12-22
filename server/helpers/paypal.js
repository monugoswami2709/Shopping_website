const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AYuBgTpm328XnNNtXsvpBxBW2xQdxzu7a-8fZKHf5rxmICrIxJTINvniSriYEXafHfOHPDscF4dZrFty",
  client_secret: "EEZ3DAGx0kuC52vbEmfjWc2ZUPrhB_vyiPX-MbrWSeEPVDgYqnI-X38kP7GeKu7AJ6DIkNQtfSzLEsK8",
});

module.exports = paypal;
