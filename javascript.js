// Monthly and yearly price switching

const billingToggle = document.getElementById("billingToggle");
const amounts = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");

billingToggle.addEventListener("change", function () {

    amounts.forEach(function(amount) {

        if (billingToggle.checked) {
            amount.textContent = amount.dataset.yearly;
        } else {
            amount.textContent = amount.dataset.monthly;
        }

    });

    periods.forEach(function(period) {
        period.textContent = billingToggle.checked
            ? "/year"
            : "/month";
    });

});

// Button functionality

const buttons = document.querySelectorAll(".choose-btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const plan = button.closest(".card")
                           .querySelector("h2").textContent;

        alert("Thank you for choosing the " + plan + " plan!");

    });

});