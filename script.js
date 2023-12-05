// ESERCIZIO 1

const savedName = localStorage.getItem('user'); // get current saved name in localStorage
const savedNameDisplay = document.getElementById('saved-name');
if (savedName) {
    savedNameDisplay.textContent = `Nome precedentemente salvato: ${savedName}`;
}

document.getElementById('save-btn').addEventListener('click', function () {
    const nameInput = document.getElementById('name').value.trim();
    if (nameInput !== '') { // if input is not empty
        localStorage.setItem('user', nameInput); // save the user in localStorage
        savedNameDisplay.textContent = `Nome precedentemente salvato: ${nameInput}`;
        document.getElementById('name').value = ''; // reset input field after sending name
    } else {
        alert('Inserisci un nome valido.'); // if input is empty
    }
});

// Aggiungi un event listener al pulsante "Rimuovi" per cancellare il valore salvato in localStorage
document.getElementById('remove-btn').addEventListener('click', function () {
    localStorage.removeItem('user'); // remove user from localStorage
    savedNameDisplay.textContent = ''; // remove displayed text
});


// ESERCIZIO 2

function startTimer() {

    let seconds = 0

    const storedTime = sessionStorage.getItem('currentTime') // get current time from sessionStorage

    if (storedTime) {
        seconds = parseInt(storedTime)
    }

    const timerDisplay = document.getElementById('timer')

    const interval = setInterval(() => { // increase seconds counter every one second
        seconds++
        timerDisplay.textContent = seconds
        sessionStorage.setItem('currentTime', seconds)
    }, 1000)


    window.addEventListener('beforeunload', () => {
        clearInterval(interval) // clear the interval after close the tab/window
    })
}

window.addEventListener('load', startTimer) // start the timer on page load