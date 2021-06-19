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


        updateSpanText("depositAmount", inputDipo);
        updateSpanText("balance", inputDipo);


    });

    function updateSpanText(id, inputDipo) {
        const currentBalance = document.getElementById(id).innerText;
        const floatBalance = parseFloat(currentBalance);
        const totalBalance = floatBalance + inputDipo;
        document.getElementById(id).innerText = totalBalance;
    };

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