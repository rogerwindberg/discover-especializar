import axios from "axios";

// Código otimizado ↓

async function fetchRepos() {
  try {
    const user = await axios.get("https://api.github.com/users/rogerwindberg");
    const repos = await axios.get(user.data.repos_url);
    console.log(repos);
  } catch (e) {
    console.log(e);
  }
}

fetchRepos();

// Código legado ↓
/*
axios
  .get("https://api.github.com/users/rogerwindberg")
  .then((response) => axios.get(response.data.repos_url))
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));
*/
