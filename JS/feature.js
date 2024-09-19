document.getElementById('display-cashout').addEventListener('click', () => {
     document.getElementById('cash-out-form').classList.remove('hidden')
     document.getElementById('addmoney-form').classList.add('hidden')
})

document.getElementById('display-addmoney').addEventListener('click', () => {
    document.getElementById('addmoney-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
})
