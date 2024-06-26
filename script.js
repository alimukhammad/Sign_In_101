let username = document.getElementById('username');
let password = document.getElementById('password');
let submit = document.getElementById('loadButton');
let load = document.getElementById('loader');

submit.addEventListener('click', function() {
    event.preventDefault(); // Prevent the default form submit action
    console.log("Button clicked")
    document.getElementById('loader').style.display = 'block';
    console.log("Username: " + username.value);
    let time = 10;
    for(let i = 0; i < time; i++) {
        console.log("Loading..." + i + "%");
    } 
});
