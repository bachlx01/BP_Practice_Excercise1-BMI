
let height = prompt('Enter you height (kg): ');
let tall = prompt('Enter your tall (centimeter): ');
let bmi;
bmi = height / ((tall / 100) * (tall / 100));
if (bmi < 18.5) {
    alert('You are so thin!');
} else if (bmi < 25) {
    alert('You look so good!');
} else if (bmi < 30) {
    alert('You are overweight!');
} else if (bmi >= 30) {
    alert('So sad! You are Obese!');
} else {
    alert('Make sure you enter correct value, Please again!');
}
