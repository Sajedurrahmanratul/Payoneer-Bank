const loginBtn = document.getElementById("btn");

loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login");
    loginArea.style.display = "none";

    const trans = document.getElementById("transaction");

    trans.style.display = "block";

    //deposit Section

    const depositAmount = document.getElementById("depositBtn");

    depositAmount.addEventListener("click", function () {
        const depositForm = document.getElementById("dipo-input").value;
        const inputDipo = parseFloat(depositForm);

        const inputForm = document.getElementById("dipo-input").value;
        const inputBalance = parseFloat(inputForm);

        const deposit = document.getElementById("depositAmount").innerText;

        const depositAmount = parseFloat(deposit);

        const total = inputBalance + depositAmount;

        document.getElementById("depositAmount").innerText = total;

        const balanceAmount = document.getElementById("balance").innerText;
        const balance = parseFloat(balanceAmount);
        const totalDepoBalance = inputBalance + balance;

        document.getElementById("balance").innerText = totalDepoBalance;



    });

    //Withdraw Section
    const withdrawButton = document.getElementById("withdrawBtn");

    withdrawButton.addEventListener("click", function () {
        const withdraw = document.getElementById("withdrawInput").value;
        const withdrawForm = parseFloat(withdraw);

        const balance = document.getElementById("balance").innerText;
        const balanceSec = parseFloat(balance);

        const totalBalanceAfterWithdraw = balanceSec - withdrawForm;

        document.getElementById("balance").innerText = totalBalanceAfterWithdraw;

        const withdrawSection = document.getElementById("withdraw").innerText;
        const withdrawSec = parseFloat(withdrawSection);
        const withdrawAmount = withdrawSec + withdrawForm;
        document.getElementById("withdraw").innerText = withdrawAmount;

    });
});