import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


// import { fetchCountries } from './js/fetchCountries';

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

countryInput.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));

function onCountryInput() {
    const name = countryInput.value.trim();
  if (name === '') {
    return;
  }
}