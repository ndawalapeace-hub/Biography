const form = document.querySelector('.form');
const submitBtn = form.querySelector('button');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  submitBtn.style.backgroundColor = '#28a745'; 
  submitBtn.style.color = '#ffffff';           
  submitBtn.textContent = '😉Message Sent!';
  submitBtn.disabled = true;                   

  setTimeout(() => {
    form.reset();                             
    submitBtn.style.backgroundColor = '';     
    submitBtn.style.color = '';
    submitBtn.textContent = 'Submit';
    submitBtn.disabled = false;                
  }, 3000);
});
