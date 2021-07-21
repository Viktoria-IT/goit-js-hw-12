import './css/styles.css';

const DEBOUNCE_DELAY = 300;

inputSearch: document.getElementById('search-box');
countryInfo: document.querySelector('.country-info');

const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountry(countryName) {
    return fetch(`${BASE_URL}/name/${countryName}`).then(response => 
            response.json(),
        );        
}

export default { fetchCountry };
