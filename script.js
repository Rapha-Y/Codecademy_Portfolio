function warnUser(event) {
    event.preventDefault();
    alert('Sorry, you cannot send a direct e-mail yet.');
}

let btn = document.getElementById('submit-button');
btn.onclick = warnUser;