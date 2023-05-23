const form = document.querySelector(".contact-info");
const fullName = document.getElementById("name-field");
const email = document.getElementById("email-field");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const sendButton = document.querySelector(".send-btn button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const validateSubject = () => {
  const subjectValue = subject.value.trim();
  const subjectError = document.getElementById("subject-error");

  if (subjectValue === "") {
    subject.classList.add("invalid-input");
    subject.classList.remove("valid-input");
    subjectError.textContent = "Please enter the subject of your message";
    return false;
  } else {
    subject.classList.add("valid-input");
    subject.classList.remove("invalid-input");
    subjectError.textContent = "";
    return true;
  }
};

// full name validation
const checkFullName = () => {
  const fullName = document.getElementById("name-field");
  const value = fullName.value.trim();
  const fullNameMsg = document.getElementById("full-name-msg");

  if (value.length === 0) {
    fullNameMsg.innerText = "Full name is required";
    fullNameMsg.classList.remove("success");
    fullNameMsg.classList.add("error");
    return false;
  } else if (value.trim().length < 5) {
    fullNameMsg.innerText = "Full name must be at least 5 characters";
    fullNameMsg.classList.remove("success");
    fullNameMsg.classList.add("error");
    return false;
  } else {
    fullNameMsg.innerText = "";
    fullNameMsg.classList.remove("error");
    fullNameMsg.classList.add("success");
    return true;
  }
};

//email validation

const validateEmail = () => {
  const emailValue = email.value.trim();
  const emailError = document.getElementById("email-error");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    email.classList.add("invalid-input");
    email.classList.remove("valid-input");
    emailError.textContent = "Please enter a valid email address";
    return false;
  } else {
    email.classList.add("valid-input");
    email.classList.remove("invalid-input");
    emailError.textContent = "";
    return true;
  }
};

//subject field

const validateSubjectt = () => {
  const subjectValue = subject.value.trim();
  const subjectError = document.getElementById("subject-error");

  if (subjectValue === "") {
    subject.classList.add("invalid-input");
    subject.classList.remove("valid-input");
    subjectError.textContent = "Please enter the subject of your message";
    return false;
  } else {
    subject.classList.add("valid-input");
    subject.classList.remove("invalid-input");
    subjectError.textContent = "";
    return true;
  }
};

//message field

const validateMessage = () => {
  const messageValue = message.value.trim();
  const messageError = document.getElementById("message-error");

  if (messageValue === "") {
    message.classList.add("invalid-input");
    message.classList.remove("valid-input");
    messageError.textContent = "Please enter your message";
    return false;
  } else {
    message.classList.add("valid-input");
    message.classList.remove("invalid-input");
    messageError.textContent = "";
    return true;
  }
};

const validateForm = () => {
  const isFullNameValid = checkFullName();
  const isEmailValid = validateEmail();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();
  const isSubjectValidd = validateSubjectt();
  sendButton.disabled = !(
    isFullNameValid &&
    isEmailValid &&
    isSubjectValid &&
    isMessageValid &&
    isSubjectValidd
  );
};

fullName.addEventListener("input", checkFullName);
email.addEventListener("input", validateEmail);
subject.addEventListener("input", validateSubject);
message.addEventListener("input", validateMessage);
subject.addEventListener("input", validateSubjectt);

checkFullName();
validateEmail();
validateSubject();
validateMessage();
validateSubjectt();
