let searchInput = document.getElementById('searchInput');
let spinner = document.getElementById('spinner');
let resultCountries = document.getElementById('resultCountries');
let countriesData = [];

function createCountryCard(country) {
    let countryCard = document.createElement('div');
    countryCard.classList.add('country-card', 'col-6', 'col-md-4', 'col-lg-3', 'mb-3');
    countryCard.innerHTML =
        `<div>
    <img src=${country.flag} alt="${country.name}>
    <h5>${country.name}</h5>
    <p>Population: ${country.population}</p>
    </div>
`
}

function displayCountries(filteredCountries) {
    resultCountries.innerHTML = '';
    filteredCountries.forEach(createCountryCard);
}

function filterCountries() {
    const searchValue = searchInput.value.toLowerCase();
    const filtered = countriesData.filter(country =>
        country.name.toLowerCase().includes(searchValue));
    displayCountries(filtered);
}

function getCountriesData() {
    spinner.classList.remove('d-none');
    fetch("https://apis.ccbp.in/countries-data", {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            countriesData = data;
            displayCountries(countriesData);
        })
        .finally(() => {
            spinner.classList.add('d-none');
        });
}

getCountriesData();

searchInput.addEventListener('input', filterCountries);
