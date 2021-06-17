const loginBtn = document.getElementById("btn");

loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login");
    loginArea.style.display = "none";

    const trans = document.getElementById("transaction");

    trans.style.display = "block";

});