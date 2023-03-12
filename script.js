function check() {
  let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = document.getElementById("email")
  let error = document.getElementById("icon__error")
  let warning = document.getElementById("warning");
  let input = document.getElementById("input")

  if(email.value.match(format)) {
    error.style.display = "none"
    warning.style.color = "transparent"
    input.style.outlineColor = "hsla(var(--clr-300), .5)"
  } else {
    error.style.display = "initial"
    warning.style.color = "var(--clr-350)"
    input.style.outlineColor = "var(--clr-350)"
  }
}