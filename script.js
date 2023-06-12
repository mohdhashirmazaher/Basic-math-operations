// Add event listeners to perform operations when buttons are clicked
document.getElementById('addBtn').addEventListener('click', function() {
  performOperation('+');
});

document.getElementById('subtractBtn').addEventListener('click', function() {
  performOperation('-');
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
  performOperation('*');
});

document.getElementById('divideBtn').addEventListener('click', function() {
  performOperation('/');
});

// Perform the operation based on the operator and display the result
function performOperation(operator) {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  if (!isNaN(num1) && !isNaN(num2)) {
    var result;
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        document.getElementById('result').textContent = 'Error: Cannot divide by zero.';
        return;
      }
    }

    document.getElementById('result').textContent = 'Result: ' + result;
  } else {
    document.getElementById('result').textContent = 'Please enter valid numbers.';
  }
}
