formSubmited = () => {
  const form = document.getElementById("form");
  const user = document.getElementById("username").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const con_pass = document.getElementById("con_pass").value;

  if (pass && pass === con_pass) {
    console.log(user);
    localStorage.setItem("username", user);
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);

    // location.href = "./afterSubmit.html";
  } else {
    window.alert("Password is empty or doesn't match");
  }
};

const user = localStorage.getItem("username");
const duser = (document.getElementById("user").innerText = user);

const fname = localStorage.getItem("fname");
const dfname = (document.getElementById("fname").innerText = fname);

const lname = localStorage.getItem("lname");
const dlname = (document.getElementById("lname").innerText = lname);

const email = localStorage.getItem("email");
const demail = (document.getElementById("email").innerText = email);

const logout = () => {
  localStorage.clear();
  location.href = "./index.html";
};
