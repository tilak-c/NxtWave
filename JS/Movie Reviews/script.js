let container = document.getElementById('movieReviewsContainer');

let div = document.createElement('div');
div.id = "reviewsContainer";

let label1 = document.createElement('label');
label1.textContent = "MOVIE TITLE"

let input = document.createElement('input');
input.id = "titleInput";
input.placeholder = "Enter a movie title"
let br = document.createElement('br')
let label2 = document.createElement('label');
label2.textContent = "YOUR REVIEW"

let textarea = document.createElement('textarea')
textarea.id = "reviewTextarea";
textarea.placeholder = "Enter your review"
let button = document.createElement('button');
button.id = "addBtn";
button.textContent = "Add"

button.addEventListener('click', function() {
    if (titleInput.value.trim() === "") {
        alert('Please enter the movie title');
        return;
    }

    let reviewItem = document.createElement('p');
    reviewItem.textContent = `${titleInput.value}:${reviewTextarea.value}`;

    reviewsContainer.appendChild(reviewItem);

    titleInput.value = "";
    reviewTextarea.value = "";
})


div.appendChild(label1);
div.appendChild(br);
div.appendChild(input);
div.appendChild(label2);
div.appendChild(br);
div.appendChild(textarea);
div.appendChild(button);

container.appendChild(div);
