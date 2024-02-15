const card = document.querySelector('.card')
const thanks = document.querySelector('.thanks')

const btnSubmit = document.getElementById('submit')
const rateAgainBtn = document.querySelector('#rateagain')

const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.btn')

btnSubmit.addEventListener('click', () => {
    card.classList.add('hidden')
    thanks.classList.remove('hidden')
   
})


rateAgainBtn.addEventListener('click', () => {
    thanks.classList.add('hidden')
    card.classList.remove('hidden')
    
})

rates.forEach((rate) =>{
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    })
})
