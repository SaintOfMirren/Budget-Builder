// declare global variables
// declare functions
// setup event listeners

const expenseFormHandler = async (event) => {
    event.preventDefault();
    console.log(amount);
  
    const amount = document.querySelector('#amount').value.trim();
    const category = document.querySelector('#category').value.trim();
    const description = document.querySelector('#description').value.trim();
    console.log(amount, category, description);
  
    if (amount && category) {
      const response = await fetch(`/api/expense`, {
        method: 'POST',
        body: JSON.stringify({ amount, category }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/expense');
      } else {
        alert(response.statusText);
      }
    }
  };

const plusBtns = document.querySelectorAll('.budget-section h3 button')
const sectionContentElements = document.querySelectorAll('.budget-section--content')
const calcBtn = document.getElementById('calcBtn')
const budgetForm = document.getElementById('budget')

plusBtns.forEach((btn, btnIndex) => {
    btn.addEventListener('click', e => {
        e.preventDefault()
        sectionContentElements[btnIndex].classList.toggle('hidden')
    })
})

// calcBtn.addEventListener('click', e => {
//     e.preventDefault()
//     let formData = new FormData(budgetForm)
//     {
//         incomeMain: ""
//         incomeOther: ""
//     }
// })

let form = document.getElementById('budget')
let btn = document.getElementById('calcBtn')
let incomeElement = document.getElementById('money-valueIncome')
let expensesElement = document.getElementById('money-valueExpenses')
let balanceElement = document.getElementById('money-valueRemainder')

// btn.addEventListener('click', e => {
// 	e.preventDefault()
//   let data = Object.fromEntries(new FormData(form))
  
//   let totalExpenses = parseInt(data.food) + parseInt(data.income) + parseInt(data.transport)
//   let balance = parseInt(data.income) - totalExpenses
  
//   incomeElement.innerText = data.income
//   expensesElement.innerText = totalExpenses
//   balanceElement.innerText = balance
// })

document
  .querySelector('.budget-section')
  .addEventListener('submit', expenseFormHandler);