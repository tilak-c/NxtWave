let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainerEl = document.getElementById("profileContainer");
profileContainerEl.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");

let imgContainerEl = document.getElementById('imgContainer');

let imgEl = document.createElement("img");
imgEl.setAttribute("src", profileDetails.imgSrc);
imgEl.classList.add("profile-img");
imgContainerEl.appendChild(imgEl);

let nameHeadingEl = document.createElement("h1");
nameHeadingEl.classList.add("profile-name");
nameHeadingEl.textContent = profileDetails.name;
profileContainerEl.appendChild(nameHeadingEl);

let ageEl = document.createElement("p");
ageEl.classList.add("age");
ageEl.textContent = "Age: " + profileDetails.age;
profileContainerEl.appendChild(ageEl);
