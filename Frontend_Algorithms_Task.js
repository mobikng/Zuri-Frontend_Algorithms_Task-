// Question 1
// Degree Fahrenheit to Degree Celsuius converter
function convertFahrToCelsius(tempInFahr) {
    let F = tempInFahr;
    
    if ((Number(F) >= 0) || (Number(F) <= 0) === 'true') {  
       var C = (F - 32) * 5/9
       return C.toFixed(4)
    }else {
    return `${tempInFahr} is not a valid number but a/an ${typeof(tempInFahr)}.`
    }
}

console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius('0'))
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));

// Question 2
function count(n) {
    if (n == 1) {
        return [1];
    } else {
        var numbers = count(n-1);
        numbers.push(n);
        return numbers;
    }
}

// checkYuGiOh
function checkYuGiOh(positiveNum) {
   listOfNumbers = count(positiveNum);
    return listOfNumbers;
}

console.log(checkYuGiOh(10));




