const form = document.querySelector('.form');
const radioInputs = document.querySelectorAll('.form-radio-input');
const ratingCard = document.querySelector('.rating-card');


let ratingValue; 

radioInputs.forEach(input => {
    input.addEventListener('change', (e) => {
        ratingValue = e.target.value;
    })
})

form.addEventListener('submit' , e => {
    e.preventDefault(); 
    if(!ratingValue) return; 
    renderThankYouContent(ratingCard, ratingValue)
})

function renderThankYouContent(container, ratingValue) {
    container.innerHTML = `
    
    <div class="thank-you">
      <img
      src="./images/illustration-thank-you.svg" alt="thank you card" class="thank-you-img"/>
      <p class="result">You selected ${ratingValue} out of 5</p>
      <h1 class="thank-you-title">Thank You!</h1>
      <p class="thank-you-description">
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </p>
    </div>`

}