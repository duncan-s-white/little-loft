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

const options = {
  threshold: 0.3
};

const observeSections = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-animation');
      }
    });
  }, options);

  const infoSections = document.querySelectorAll('section.info');
  infoSections.forEach((section) => observer.observe(section));
}

window.addEventListener("load", (event) => {

  // 1.5 second delay used for mobile as the intersecting boundaries weren't applied correctly otherwise
  var delayInMilliseconds = 1500;
  setTimeout(observeSections, delayInMilliseconds);

});