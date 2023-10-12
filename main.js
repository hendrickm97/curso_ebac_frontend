document.addEventListener("DOMContentLoaded", function () {
  const profileAvatar = document.querySelector(".profile-avatar");
  const profileName = document.querySelector(".profile-name");
  const profileUserName = document.querySelector(".profile-username");
  const repository = document.getElementById("repository");
  const followers = document.getElementById("followers");
  const following = document.getElementById("following");
  const profileLink = document.querySelector(".profile-link");
  const urlAPI = "https://api.github.com/users/hendrickm97";

  fetch(urlAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      profileAvatar.src = json.avatar_url;
      profileName.innerText = json.name;
      profileUserName.innerText = json.login;
      repository.innerHTML = json.public_repos;
      followers.innerHTML = json.followers;
      following.innerHTML = json.following;
      profileLink.href = json.html_url;
    });
});
