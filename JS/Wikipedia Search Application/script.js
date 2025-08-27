let searchInputEl = document.getElementById('searchInput');
let searchResultsEl = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');

searchInputEl.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove('d-none');
        searchResultsEl.innerHTML = '';

        fetch(`https://apis.ccbp.in/wiki-search?search=${encodeURIComponent(searchInputEl.value)}`)
            .then(response => response.json())
            .then(data => {
                spinnerEl.classList.add('d-none');
                data.search_results.forEach(result => {
                    createAndAppendSearchResult(result);
                });
            });
    }
});

function createAndAppendSearchResult(result) {
    const {
        link,
        title,
        description
    } = result;
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';

    const titleLink = document.createElement('a');
    titleLink.href = link;
    titleLink.textContent = title;
    titleLink.className = 'result-title';
    resultItem.appendChild(titleLink);

    const br1 = document.createElement('br');
    resultItem.appendChild(br1);

    const urlLink = document.createElement('a');
    urlLink.href = link;
    urlLink.textContent = link;
    urlLink.className = 'result-url';
    resultItem.appendChild(urlLink);

    const br2 = document.createElement('br');
    resultItem.appendChild(br2);

    const desc = document.createElement('p');
    desc.textContent = description;
    desc.className = 'link-description';
    resultItem.appendChild(desc);

    searchResultsEl.appendChild(resultItem);
}
