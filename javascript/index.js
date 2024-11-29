const submitEmail = () => {
  const email = document.getElementById('email').value
  let message;
  if (email == "") {
    message = "You must enter an email to subscribe"
  } else {
    message = "Thank you for subscribing"
  }
  alert(message);
}