const vConsole = new VConsole()
const form = document.querySelector("#formRegister");
function formListener() {
  form.addEventListener("submit", function (event) {
    // stop form submission
    event.preventDefault();
    validateForm(form.elements)
  });
}
async function handleSubmit(data) {
  const rqs = await Fecth({
    method: 'POST',
    token: liff.getAccessToken(),
    path: `${projectConfig.apiServer}/register/line`,
  })
  console.log("rqs", data, rqs)
  console.log("liff.getAccessToken(),", liff.getAccessToken(),)
}
function hasValue(input, message) {
  if (input.value.trim() === "") return showError(input, message);
  return showSuccess(input);
}
function showMessage(input, message, type) {
  const msgSmall = input.parentNode.parentNode.querySelector("small");

  msgSmall.innerText = message;
  msgSmall.className = type ? "success" : "error";
  input.parentNode.className = type ? "field-input success" : "field-input error";
  return type;
}
function validateForm(elements) {
  const USERNAME_REQUIRED = "กรุณาใส่ ชื่อผู้ใช้งาน";
  const PASSWORD_REQUIRED = "กรุณาใส่ รหัสผ่าน";
  const IDENTITYNUMBER_REQUIRED = "กรุณาใส่ หมายเลข บัตรประชาชน / พาสปอร์ต ";
  // validate the form
  let username = hasValue(elements["username"], USERNAME_REQUIRED);
  let password = hasValue(elements["password"], PASSWORD_REQUIRED);
  let identityNumber = hasValue(elements["identityNumber"], IDENTITYNUMBER_REQUIRED);
  // if valid, submit the form.
  if (username && password && identityNumber) {
    handleSubmit({
      username: elements["username"].value,
      password: elements["password"].value,
      identityNumber: elements["identityNumber"].value,
    })
  }
}
function showSuccess(input) { return showMessage(input, "", true); }
function showError(input, message) { return showMessage(input, message, false); }

async function main() {
  liff.ready.then(() => {
    document.getElementById("isLoggedIn").append(liff.isLoggedIn())
    if (liff.isLoggedIn()) {
      console.log("isLoggedIn")
      formListener()
    } else {
      liff.login('https://i-sattaya.github.io/raimon-liff/raimon/login')
    }
  })
  await liff.init({ liffId: projectConfig.liffId })
}
main()