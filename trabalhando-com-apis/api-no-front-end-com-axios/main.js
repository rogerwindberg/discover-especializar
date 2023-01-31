const url = "http://localhost:5500/api"

// Método GET
function getUsers() {
  axios.get(url)
  .then(response => {
    apiResult.textContent = JSON.stringify(response.data)
  })
  .catch(error => console.error(error))
}

// Método POST
function addNewUser(newUser){
  axios.post(url, newUser)
  .then(response => {
    console.log(response)
  })
  .catch(error => console.error(error))
}

// Método GET com parâmetros (params)
function getUser(id) {
  axios.get(`${url}/${id}`)
  .then(response => {
    const data = response.data
    userName.textContent = data.name
    userCity.textContent = data.city
    userId.textContent = data.id
    userAvatar.src = data.avatar
  })
  .catch(error => console.error(error))
}

// Método PUT
function updateUser(id, userUpdated) {
  axios.put(`${url}/${id}`, userUpdated)
  .then(response => console.log(response))
  .catch(error => console.error(error))
}

// Método DELETE
function deleteUser(id) {
  axios.delete(`${url}/${id}`)
  .then(response => console.log(response))
  .catch(error => console.error(error))
}

// deleteUser(1)

const userUpdated = {
  name: "Marcelo Calvis",
  avatar: "https://picsum.photos/200/300",
  city: "Recife"
}
// updateUser(3, userUpdated)


getUsers()
getUser(1)

const newUser = {
  name: "Olivia Zars",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de Janeiro"
}
// addNewUser(newUser)