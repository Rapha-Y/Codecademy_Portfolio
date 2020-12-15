function warnUser(event) {
    event.preventDefault();
    alert('Sorry, you cannot send a direct e-mail yet.');
}

function sendEmail(e) {
    e.preventDefault();
    let subject = document.getElementById('subject').value;
    let body = document.getElementById('message').value;
    console.log(subject, body);
    window.open(`mailto:raph.yuki@gmail.com?subject=${subject}&body=${body}`);
}

let btn = document.getElementById('submit-button');
btn.onclick = sendEmail;