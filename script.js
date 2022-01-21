const headline = document.querySelector('.head__today');

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
day = String(day).padStart(2,"0");
month = String(month + 1).padStart(2,"0");

headline.innerHTML = `${day}.${month}.${year}`;

const previous = document.querySelector('.button__left');
const next = document.querySelector('.button__right');
const cities = document.querySelectorAll('.main__cities-city');
const days = document.querySelectorAll('.main__weather');
let counter = 0;

function weather (e) {
    if (e.currentTarget === next){
        if (counter < cities.length - 1){
            counter ++;
        }
        else {
            counter = 0;
        }
    }
    else {
        if (counter > 0) {
            counter--;
        } else {
            counter = cities.length - 1;
        }
    }

    cities.forEach((city,i) => {
        if (i === counter) {
            city.classList.add('main__cities-active');
            city.classList.remove('main__cities-next');
            city.classList.remove('main__cities-previous');
        }

        else if (i < counter) {
            city.classList.remove('main__cities-active');
            city.classList.remove('main__cities-next');
            city.classList.add('main__cities-previous');
        }
        else {
            city.classList.remove('main__cities-active');
            city.classList.add('main__cities-next');
            city.classList.remove('main__cities-previous');
        }
    });

    days.forEach((day,i) => {
        if (i === counter) {
            day.classList.add('main__weather-active');
            day.classList.remove('main__weather-next');
            day.classList.remove('main__weather-previous');
        }

        else if (i < counter) {
            day.classList.remove('main__weather-active');
            day.classList.remove('main__weather-next');
            day.classList.add('main__weather-previous');
        }
        else {
            day.classList.remove('main__weather-active');
            day.classList.add('main__weather-next');
            day.classList.remove('main__weather-previous');
        }
    });
}

next.addEventListener('click',weather);
previous.addEventListener('click',weather);