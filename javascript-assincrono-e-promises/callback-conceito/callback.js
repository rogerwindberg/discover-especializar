// Funções aceitam qualquer tipo de dado como argumento

function imprimirDado(dado) {
  console.log(dado);
}

imprimirDado(1)
imprimirDado('texto')
imprimirDado(true)
imprimirDado({nome: 'João'})
imprimirDado([1, 2, 3])

// ---------------------------------------------

function imprimirAlgumDado(dado) {
  console.log(dado());
}

imprimirAlgumDado(function () {
  return 'Olá mundo'
})