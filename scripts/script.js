'use strict;'

const currencyOneEl = document.getElementById('currency-one');
const currencyTwoEl = document.getElementById('currency-two');
const amountOneEl = document.getElementById('amount-one');
const amountTwoEl = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const btnSwap = document.getElementById('swap');



  const calculate = function(){
    const currencyOne = currencyOneEl.value;
    const currencyTwo = currencyTwoEl.value;
   
    let url =
      `https://v6.exchangerate-api.com/v6/75ee42a16264b8f8c3755050/latest/${currencyOne}`
    
    fetch(url).then((res)=> res.json())
    .then((data) =>{
        const rate = data.conversion_rates[currencyTwo];
        rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
        amountTwoEl.value = (amountOneEl.value * rate).toFixed(2);
    })
    
  }

currencyOneEl.addEventListener('change', calculate);
amountOneEl.addEventListener('input',calculate);
currencyTwoEl.addEventListener('change',calculate);
amountTwoEl.addEventListener('input',calculate);

  calculate();