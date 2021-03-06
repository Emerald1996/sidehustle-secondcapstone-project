// toggleBtn

const burgerBtn = document.querySelector(".burger");
const navLinks = document.querySelector(".links");

const toggle = () => {
  burgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
};
toggle();



// eyeIcon
const showPasswordIcon = ()=>{
  
  const icon = document.getElementById("icon");
  const imageIcon = document.getElementById('openIcon')

  icon.addEventListener('click' , ()=>{
    if(password.type === 'password'){
      password.setAttribute('type' , 'text')
      imageIcon.src = "image/hideicon.png";
    }
    else{
       password.setAttribute("type", "password");
       imageIcon.src = "image/showicon.png";
       
    }
  })
}
showPasswordIcon()


// forms
const form = document.getElementById("form-group");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const gender = document.getElementById("gender")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();


if (usernameValue === "") {
  setError(username, "username is required");
} else {
  setSuccess(username);
}

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (phoneNumberValue === "") {
    setError(phoneNumber, "Phone number is required");
  } else {
    setSuccess(phoneNumber);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Please confirm your password");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Passwords doesn't match");
  } else {
    setSuccess(confirmPassword);
  }


    if (gender.selectedIndex == 0) {
      setError(gender, "gender is required");
    } else {
      setSuccess(gender);
    }

}




