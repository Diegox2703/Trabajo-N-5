const num1 = parseInt(prompt('Escriba un numero'))
const num2 = parseInt(prompt('Escriba un segundo numero'))
const operacion = prompt('Eliga una operacion matematica: +, -, *, /')

if (isNaN(num1) || isNaN(num2)) alert('Escriba un numero valido')
else if (operacion === '+') alert(`El resultado de la suma es: ${num1 + num2}`)
else if (operacion === '-') alert(`El resultado de la resta es: ${num1 - num2}`)
else if (operacion === '*') alert(`El resultado de la multiplicación es: ${num1 * num2}`)
else if (operacion === '/') alert(`El resultado de la división es: ${num1 / num2}`)
else alert('Operación matematica no valida, use: +, -, *, /')
