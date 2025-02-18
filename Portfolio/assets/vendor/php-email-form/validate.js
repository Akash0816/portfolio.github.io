function sentMail() {
  let parms = {
    name: document.getElementById("name-field").value,
    email: document.getElementById("email-field").value,
    subject: document.getElementById("subject-field").value,
    message: document.getElementById("message-field").value,
  };

  emailjs
    .sent("service_zilgydj", "template_l64sf3a", parms)
    .then(alert("email Sent"));
}
