
document.addEventListener("DOMContentLoaded", function() {
    const bmiForm = document.getElementById("bmiForm");

    bmiForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const height = (document.getElementById("height").value);
        const weight = (document.getElementById("weight").value);
        
        if (isNaN(height) || isNaN(weight)) {
            alert("Please enter valid height and weight.");
            return;
        }
        console.log(height, weight);
        
        const bmi = calculateBMI(height, weight);
        displayResult(bmi, weight, height);

    });

    function calculateBMI(height, weight) {
        let bmi =((weight)/(height*height)*10000).toFixed(2);
        return bmi;
    }
    function calculateAccurateWeight(height){
        let AccurateWeight = ((24.9 * (height * height))/10000).toFixed(2);
        return AccurateWeight;
    }
    function calculateBeforeWeight1(height){
        let beforeWeight1 = ((18.5 * (height * height))/10000).toFixed(2);
        return beforeWeight1;
    }
    function displayResult(bmi,weight,height) {
        const resultElement = document.getElementById("result");
        const result = document.getElementById("ans");

        let AccurateWeight = calculateAccurateWeight(height);
        let beforeWeight1 = calculateBeforeWeight1(height);        
        if(bmi<18.5){
            resultElement.innerHTML ="Your Bmi is " + bmi;
        }else if(bmi>=18.5 && bmi<=24.9){
            result.innerHTML =`Your Bmi is <h1>${bmi} </h1>   You are Normal or ${beforeWeight1} for 18.5 to be Accurate.`;
        }
        else if(bmi>=25 && bmi<=29.9){
           result.innerHTML =`Your Bmi is <h1>${bmi}</h1> You are Overweight, You should have weight of ${AccurateWeight}kg  for 24.9, You should decrease your weight by ${(weight-AccurateWeight).toFixed(3)} kg to be Accurate Fit,`
        }
        else if(bmi>=30 && bmi<=34.9){
            result.innerHTML =`Your Bmi is <h1>${bmi}</h1> You are Obese, You should have weight of ${AccurateWeight}kg  for 24.9, You should decrease your weight by ${weight-AccurateWeight}kg to be Fit,`;
        }
        else if(bmi>=35 && bmi<=39.9){
            result.innerHTML =`Your Bmi is <h1>${bmi}</h1 You are Severely Obese, You should have weight of ${AccurateWeight}kg  for 24.9 or You should decrease your weight by ${weight-AccurateWeight}kg to be Fit,`;
        }
        else{
            result.innerHTML =`Your Bmi is <h1>${bmi}</h1> You are Morbidly Obese , You should have weight of ${AccurateWeight}kg  for 24.9 or  <h1>${beforeWeight1}</h1>  for 18.5 to be Accurate,`;
            }    
    }
});