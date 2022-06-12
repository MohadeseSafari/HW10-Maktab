function Login() {
    let Username = document.getElementById("username").value;
    let Password = document.getElementById("password").value;
    let object = { Username, Password };
    let userInfo = Object.assign(object);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}