const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let message ='';
    if(bmi <18.6){
      message = 'under weight = less than 18.6';
    }
    else if(bmi>=18.6 && bmi<=24.9){
      message = 'Normal Range = 18.6 and 24.9';
    }
    else{
      message='Overweight = Greater than 24.9';
    }
    results.innerHTML = `<span>Your BMI is ${bmi}</span><br><span>${message}</span>`;
  }
  
});
