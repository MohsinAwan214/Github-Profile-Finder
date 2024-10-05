let form = document.querySelector("#form");
let main = document.querySelector("#main");
main.style.display = "none"
form.addEventListener("submit", async (app) => {
    app.preventDefault();
    let imgTag = main.children[0];
    let name = main.children[1];
    let following = main.children[2].children[0];
    let followers = main.children[2].children[1];
    let repo = main.children[2].children[2];
    let link = main.children[3].children[0];
    
    let value = app.target.children[0].value;
    
    let userApi = `https://api.github.com/users/${value}`;
    
    try {
      main.style.display = "block"
    let response = await axios(userApi);
    imgTag.src = response.data.avatar_url;
    name.innerHTML += response.data.name;
    link.href = response.data.html_url;
    repo.innerHTML += response.data.public_repos;
    following.innerHTML += response.data.following;
    followers.innerHTML += response.data.followers;
  } catch (err) {
    alert(err.response.data.message);
  }
});

