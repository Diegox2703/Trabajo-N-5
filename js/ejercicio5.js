const minutos = parseInt(prompt('Escriba un valor en minutos'))

if (isNaN(minutos)) alert('Escriba un valor numerico')
else {
    const segundos = minutos * 60
    const horas = minutos / 60
    alert(`
        ${minutos} minutos a segundos: ${segundos} segundos
        ${minutos} minutos a horas: ${horas} horas
    `)
}