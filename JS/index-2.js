document.getElementById("add-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const pinCheck = document.getElementById("pin-check").value;

  if (pinCheck === "12345") {
    const getAmount = parseFloat(document.getElementById("amount").value);
    let totalAmount = parseFloat(document.getElementById("total-amount").innerText);
    // const addMoneyNmber = parseFloat(getAmount);
    // const balance = parseFloat(totalAmount);
    const updatedAmount = getAmount + totalAmount;
    document.getElementById("total-amount").innerText = updatedAmount;
   document.getElementById('amount').value = ""
   document.getElementById('pin-check').value = ""

   
  }
  else {
    alert('Please write valid pin info')
  }
});



// event listener for cashout button
document.getElementById('cashout-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const pinCheck = document.getElementById("pin-check2").value;
 
    
    if(pinCheck === "12345"){

        const getAmount = parseFloat(document.getElementById("cashout-amount").value);
        let totalAmount = parseFloat(document.getElementById("total-amount").innerText);
        const updatedAmount = totalAmount - getAmount
        document.getElementById("total-amount").innerText = updatedAmount
        document.getElementById("cashout-amount").value = ""
        document.getElementById("pin-check2").value = ""
    }
    else {
        alert('pleae write valid info')
    }
})
