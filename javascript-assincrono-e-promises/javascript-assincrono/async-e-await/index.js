/**
 * Async/Await
 *
 * Maneira de escrever promises
 * Syntactic Sugar
 */

const promessa = new Promise(function (resolve, reject) {
  return resolve("ok");
});

// Código otimizado ↓

async function start() {
  try {
    const result = await promessa;
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("rodar sempre");
  }
}

start();

// Código legado ↓

/*
 promessa
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.log(error)
  })
  .finally(function() {
    console.log('sempre irei executar')
  })
  */
