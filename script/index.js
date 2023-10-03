function reverseString(str) {
    return str.split('').reverse().join('');
}

function handleInput() {
    const inputValue = document.getElementById('inputString').value;
    setTimeout(() => {
        const reversed = reverseString(inputValue);
        document.getElementById('reversedString').innerText = reversed;
    }, 1000); 
}


for (let i = 1; i <= 30; i++) {
    const button = document.createElement('button');
    button.innerText = `2023-09-${String(i).padStart(2, '0')}`;
    button.addEventListener('click', () => fetchData(i));
    document.querySelector('.date-buttons').appendChild(button);
}


const API_KEY = 'PFFGWtzvCKNZuXgU9he1K6GoaaFv1N6IoD5Dd1hz'; 

function fetchData(day) {
    const date = `2023-09-${String(day).padStart(2, '0')}`;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => displayError(error))
        .finally(() => {
            console.log('Request completed');
        });
}
function displayData(data) {
    const imageElement = document.getElementById('nasaImage');
    const descriptionElement = document.getElementById('nasaDescription');

    imageElement.src = data.url;
    descriptionElement.innerText = data.explanation;
}
function displayError(error) {
    const imageElement = document.getElementById('nasaImage');
    const descriptionElement = document.getElementById('nasaDescription');

    imageElement.src = '';
    descriptionElement.innerText = 'error';
}
function validRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://github.com/DenysBzenko', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const user = JSON.parse(this.responseText);
            document.getElementById('validResponse').innerText = `Name: ${user.name}, Bio: ${user.bio}`;
        } else {
            document.getElementById('validResponse').innerText = 'Error loading profile.';
        }
    };
    xhr.onerror = function() {
        document.getElementById('validResponse').innerText = 'Error occurred during the request.';
    };
    xhr.send();
}
function invalidRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://github.com/DenysBzenko', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const user = JSON.parse(this.responseText);
            document.getElementById('invalidResponse').innerText = `Name: ${user.name}, Bio: ${user.bio}`;
        } else {
            document.getElementById('invalidResponse').innerText = 'Error loading profile.';
        }
    };
    xhr.onerror = function() {
        document.getElementById('invalidResponse').innerText = 'Error occurred during the request.';
    };
    xhr.send();
}
