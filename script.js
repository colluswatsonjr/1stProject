const wageForm = () => document.getElementById('submitWage'); //grabs form by i.d.
const inputWage = () => document.getElementById('netPay'); //grabs wage
const inputRate = () => document.getElementById('wageRate') //grabs selected rate


wageForm().addEventListener('submit', (event) => {
    event.preventDefault();
    let startWage = inputWage().value
    let selectedRate = inputRate().value
    makeBudget(startWage, selectedRate)
})

function makeBudget(wage, rate){
    console.log( wage, rate)
    if(rate == 'hr'){
        console.log(wage + ' per hour')
    }else if(rate == 'yr'){
        console.log(wage + ' yearly')
    }
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