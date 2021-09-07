import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input',throttle((e) => {
    e.preventDefault();
localStorage.setItem('feedback-form-state', JSON.stringify({email:form.elements.email.value , message: form.elements.message.value}));
},500));

const feedback = JSON.parse(localStorage.getItem('feedback-form-state'));

if (feedback){
    form.elements.email.value = feedback.email;
    form.elements.message.value = feedback.message;

    }
    else{
    form.elements.email.value = "";
    form.elements.message.value = "";}
  
form.addEventListener('submit',(e) => {
console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
e.preventDefault();
localStorage.removeItem('feedback-form-state');
form.reset();
});
