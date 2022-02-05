const wageForm = () => document.getElementById('submitWage'); //grabs form by i.d.
const inputWage = () => document.getElementById('netPay'); //grabs wage
const inputRate = () => document.getElementById('wageRate') //grabs selected rate
const budgetAmount = document.getElementById("budgetAmount");
const balanceAmount = document.getElementById("balanceAmount");

const hourlyAmount = document.getElementById('hourly')
const weeklyAmount = document.getElementById('weekly')
const biweeklyAmount = document.getElementById('biweekly')
const monthlyAmount = document.getElementById('monthly')
const yearlyAmount = document.getElementById('yearly')

wageForm().addEventListener('submit', (event) => {
    event.preventDefault();
    let startWage = inputWage().value
    let selectedRate = inputRate().value
    makeBudget(startWage, selectedRate)
})

function makeBudget(wage, rate) {
    let hr; //hourly
    let dy; //daily
    let wk; //weekly
    let bw; //biWeekly
    let mo; //monthly
    let yr; //yearly
    switch (rate) {
        case 'hr':
            hr = (wage)
            dy = ((wage * 40) / 7)
            wk = (wage * 40)
            bw = ((((wage * 40) * 52) / 12) / 2)
            mo = (((wage * 40) * 52) / 12)
            yr = ((wage * 40) * 52)
            break;
        case 'yr':
            hr = ((wage / 52) / 40)
            dy = ((wage / 52) / 7)
            wk = (wage / 52)
            bw = ((wage / 12) / 2)
            mo = (wage / 12)
            yr = wage
            break;
    }
    if (!wage) {
        console.log('empty')
    } else {
        hourlyAmount.innerHTML = hr
        weeklyAmount.innerHTML = wk
        biweeklyAmount.innerHTML = bw
        monthlyAmount.innerHTML = mo
        yearlyAmount.innerHTML = yr
    }
    // console.log(hr)
    // console.log(dy)
    // console.log(wk)
    // console.log(bw)
    // console.log(mo)
    // console.log(yr)
    // console.log(balance)
}








// const addForm = document.getElementById("submitBudget"); //grabs form by id, submits starting budget
// const amountInput = document.getElementById("netPay"); // grabs input by id, starting budget value

// const budgetAmount = document.getElementById("budgetAmount");
// const balanceAmount = document.getElementById("balanceAmount");

// function getBudgetAmount(amount) {
//   if (!amount) {
//     amountInput.style.border = "1px solid #b80c09";
//     amountInput.placeholder = "input can not be empty";
//     amountInput.style.color = "#b80c09";
//     setTimeout(() => {
//       amountInput.style.color = "#495057";
//       amountInput.style.border = "1px solid gray";
//     }, 3000);
//   } else {
//     budgetAmount.innerText = amount;
//     balanceAmount.innerText = amount;
//     expenseForm.style.display = "block";
//     budgetform.style.display = "none";
//     editForm.style.display = "none";
//     amountInput.value = "";
//   }
// }

// addForm.addEventListener("submit", (e) => { //add listener to form
//   e.preventDefault(); //prevents refresh of page
//   getBudgetAmount(amountInput.value); //calls func on input value from from
// });

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM fully loaded and parsed');
// });