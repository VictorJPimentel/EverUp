let lucas = {mass: 78, height: 1.69}
let petter = {mass: 92, height: 1.9}

let bmi = {lucas: (lucas.mass)/(lucas.height * lucas.height), petter: (petter.mass)/(petter.height * petter.height)}

let lucasHigherBMI = false;
if(bmi.lucas > bmi.petter)
	lucasHigherBMI = true;


console.log("The BMI of Petter is " + bmi.petter +  ",The BMI of Lucas is " + bmi.lucas + ", Petter’s BMI is higher than Lucas’s BMI that is " + lucasHigherBMI)


let temperature = { 
cel: 80,
}

console.log(temperature.cel + "°C is " + (temperature.cel*(5/9))+32 + "°F")



let covertCelsiusToFahrenheit = (cel) => {
	return cel*(5/9)+32
}

let covertFahrenheitToCelsius = (cel) => {
	return cel*(5/9)+32
}

console.log(covertCelsiusToFahrenheit(80))

