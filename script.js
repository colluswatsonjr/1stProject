
// GET BUDGET
const budgetForm = () => document.getElementById('addBudgetForm')
const getBudget = () => document.getElementById('budgetAmount')
let myBudget = document.getElementById('myBudgetAmount')

budgetForm().addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(getBudget().value)
    adjustBudget(getBudget().value)
})

function adjustBudget(budget) {
    console.log(budget)
    if (!budget) {
        getBudget().placeholder = 'ENTER AMOUNT!'
        getBudget().style.backgroundColor = "red";
        setTimeout(() => {
            getBudget().style.backgroundColor = "white";
        }, 3000);
    } else {
        myBudget.innerText = budget
    }
}
// GET EXPENSE
const expenseForm = () => document.getElementById('addExpenseForm')
const expenseName = () => document.getElementById('expenseName')
const expenseAmount = () => document.getElementById('expenseAmount')
const showExpense = () => document.getElementById('showExpense')

expenseForm().addEventListener('submit', (event) => {
    event.preventDefault();
    listExpense(expenseName().value, expenseAmount().value)
})

let id = 0;
let expenseList = [];

function listExpense(name, amount) {
    if (!name.length || !amount) {
        console.log('nope')
    } else {
        const newExp = {
            id: id,
            name: name,
            amount: amount
        };
        expenseList.push(newExp);
        displayExpense(expenseList);
        id++;
        expenseName().value = '';
        expenseAmount().value = '';
    }
}

function displayExpense(expenses) {
    showExpense().innerHTML =
        `                    
         <tr>
             <th>Name</th>
            <th>Expense</th>
        </tr>
        `
        ;
    for (const exp of expenses) {
        exp.id
        exp.name
        exp.amount
        let tr = document.createElement('tr');
        tr.innerHTML =
            `
            <tr id='${exp.id}'>
                <td>${exp.name}</td>
                <td>${exp.amount}</td>
                <td><button id="${exp.id}" onclick="editExpense(${exp.id})"> <img src=""  /></button> </td>
                <td><button id="${exp.id}" onclick="deleteExpense(${exp.id})"><img src="" width="15" alt="" /></button></td>
            </tr>
            `
        let totaltr = document.createElement('tr');
        totaltr.innerHTML =
            `
            <tr>
                <th>Total:</th>
                <th class="totalExpense">Expense</th>
            </tr>
            `
        showExpense().appendChild(tr)
        showExpense().appendChild(totaltr)
    }
    expenseTotal();
    // showExpense().style.display = 'block';
};

function expenseTotal(){
    console.log(expenseList)
}

// EDIT/DELETE EXPENSE
function editExpense(x) {
    console.log(x)
}

function deleteExpense(x) {
    console.log(x)
}





















// // FIND BUDGET
// const findBudget = () => document.getElementById('findBudgetForm'); //grabs form by i.d.
// const inputWage = () => document.getElementById('netPay'); //grabs wage
// const inputRate = () => document.getElementById('wageRate') //grabs selected rate

// const hourlyAmount = document.getElementById('hourly')
// const weeklyAmount = document.getElementById('weekly')
// const biweeklyAmount = document.getElementById('biweekly')
// const monthlyAmount = document.getElementById('monthly')
// const yearlyAmount = document.getElementById('yearly')

// findBudget().addEventListener('submit', (event) => {
//     event.preventDefault();
//     let startWage = inputWage().value
//     let selectedRate = inputRate().value
//     makeBudget(startWage, selectedRate)
// })

// function makeBudget(wage, rate, tax) {
//     wage *= .65; //based on personal 
//     switch (rate) {
//         case 'hr':
//             hr = (wage)
//             dy = ((wage * 40) / 7)
//             wk = (wage * 40)
//             bw = ((((wage * 40) * 52) / 12) / 2)
//             mo = (((wage * 40) * 52) / 12)
//             yr = ((wage * 40) * 52)
//             break;
//         case 'yr':
//             hr = ((wage / 52) / 40)
//             dy = ((wage / 52) / 7)
//             wk = (wage / 52)
//             bw = ((wage / 12) / 2)
//             mo = (wage / 12)
//             yr = wage
//             break;
//     }
//     if (!wage) {
//         console.log('empty')
//     } else {
//         hourlyAmount.innerHTML = hr.toFixed(2)
//         weeklyAmount.innerHTML = wk.toFixed(2)
//         biweeklyAmount.innerHTML = bw.toFixed(2)
//         monthlyAmount.innerHTML = mo.toFixed(2)
//         yearlyAmount.innerHTML = yr.toFixed(2)
//         budgetAmount.innerHTML = yr.toFixed(2)
//     }
// }
// // ADJUST BUDGET
// const adjustForm = () => document.getElementById('adjustBudgetForm')
// const budget = () => document.getElementById('budget')

// adjustForm().addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(budget().value)
// })


// const budgetAmount = document.getElementById("budgetAmount");
// const balanceAmount = document.getElementById("balanceAmount");