const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if(username === 'admin' && password === 'admin'){
        window.location.href = "https://docs.google.com/spreadsheets/d/14zPNmpJsrGotrA94zTVBi0COrvTGMyvt_8qiicg5BM8/edit#gid=0";
    }else{
        alert('Login Failed');
    }
});