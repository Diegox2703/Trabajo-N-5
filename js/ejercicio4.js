let a = parseInt(prompt('Escriba un numero'))
let b = parseInt(prompt('Escriba un segundo numero'))

if (isNaN(a) || isNaN(b)) alert('Escriba numeros validos')
else {
    let valorOriginal = a
    a = b
    b = valorOriginal
    document.write(`
        <p>a = ${a}</p>  
        <p>b = ${b}</p>      
    `)
}