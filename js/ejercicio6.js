const precioEnDolares = parseInt(prompt('Escriba el precio de su producto en dolares'))

if (isNaN(precioEnDolares)) alert('Escriba un valor numerico')
else {
    const dolar = 1130
    const iva = 1.21
    const precioFinal = Math.floor(precioEnDolares * dolar * iva)
    alert(`Precio final: $${precioFinal}`)
}