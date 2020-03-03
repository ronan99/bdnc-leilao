function login() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log(user);
      localStorage.setItem("user-id", user.user);
      main();
    })
    .catch(function(error) {
      alert("Email ou senha inválida");
    });
}

function logout() {
  localStorage.removeItem("user-id");
  main();
}
