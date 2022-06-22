const playBtn = document.querySelector('.play-btn');
const userInput = document.querySelector('.user-input');
const resultHeader = document.querySelector('.result-header');

const namePrompt = prompt('Enter your name');

const nameObj = {
    name: namePrompt
};

fetch('/name', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(nameObj)
});

playBtn.addEventListener('click', () => {
    if (userInput.value === '') {
        alert('Empty string. Enter a number!')
    } else if (isNaN(userInput.value)) {
        alert('Enter a number!');
    } else if (Number(userInput.value) > 5 || Number(userInput.value) < 0) {
        alert('Enter a number between 0 and 5');
    } else {
        const obj = {
            userNumber: userInput.value
        };

        fetch('/user', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
                },
            body: JSON.stringify(obj)
        }).then(response => response.json())
          .then(response => {
            console.log(response);
            resultHeader.innerHTML = response.message
          })
          .then()
    }
});