let calcBtn = document.querySelector("#calcBtn");
let resetBtn = document.querySelector("#resetBtn");
let ageInput = document.querySelector("#ageInput");
let result = document.querySelector("#result");
let displayResult = document.querySelector("#displayResult");
let refresh = document.querySelector(".refresh");

let myTimer;
let age;

calcBtn.addEventListener('click', function(){
    age = ageInput.value.trim();

    if (age == "") {

        // To make our timer not to be affected
        clearInterval(myTimer);

        let alert = document.querySelector(".alert");
        alert.classList.add('active');

        myTimer = setInterval(() => {
            alert.classList.remove('active');
        }, 3000);

        // isNaN means if age is not a number
    } else if (isNaN(age) == true) {

        clearInterval(myTimer);

        let alert2 = document.querySelector(".alert2");
        alert2.classList.add('active');

        myTimer = setInterval(function () {
            alert2.classList.remove('active');
        }, 3000);

    } else {

        let answer = document.querySelector(".answer");
        answer.classList.add('active');

        let remaining_years = 100 - age;
        let remaining_weeks = remaining_years * 52;
        // let remaining_days = remaining_years * 365;

        result.innerHTML = numberWithCommas(remaining_weeks);
        ageInput.value = "";
    }
})

function numberWithCommas(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

resetBtn.addEventListener('click', function(){
    refresh.click();
})