/**
 * Promise
 * 
 * A promessa de que algo irá acontecer
 * Poderá dar certo ou errado,
 * mas irá acontecer
 **/

let aceitar = true

console.log('Pediu o Uber')
const promessa = new Promise((resolve, reject) => {

  if (aceitar) {
    return resolve('O carro chegou')
  } else {
    return reject('Pedido negado')
  }
})

promessa
  .then(result => console.log(result))
  .catch(erro => console.log(ReferenceError))
  .finally(() => console.log('Finalizado'))

console.log('Aguardando')