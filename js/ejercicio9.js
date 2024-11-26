const miListaDePendientes = [
    'Oppenheimer',
    'Arcane',
    'Spider-Man: Across the Spider-Verse',
    'Deadpool & Wolverine'
]

console.log('%cMi lista de pendientes: ', 'color: red')
miListaDePendientes.forEach(pendiente => console.log(pendiente))

miListaDePendientes.push('Dune')

miListaDePendientes[1] = 'The Suicide Squad'

console.log('%cMi lista de pendientes actualizada: ', 'color: green')
miListaDePendientes.forEach(pendiente => console.log(pendiente))
