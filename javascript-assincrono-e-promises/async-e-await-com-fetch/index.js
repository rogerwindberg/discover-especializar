// Código legado ↓

/*
fetch("https://api.github.com/users/rogerwindberg")
  .then((response) => response.json())
  .then((data) => fetch(data.repos_url))
  .then((res) => res.json())
  .then((d) => console.log(d))
  .catch((error) => console.log(error));
*/

// Código otimizado ↓ 

async function start() {
  const url = "https://api.github.com/users/rogerwindberg";
  const user = await fetch(url).then((r) => r.json());
  const userRepos = await fetch(user.repos_url).then((r) => r.json());
  console.log(userRepos);
}

start().catch((e) => console.log(e));
