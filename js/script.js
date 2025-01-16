// Ini File Javascript

console.log('hello world!');

// Function to validate form
function formValidation() {
    let nameInput = document.getElementById('name-input').Value;
    
    console.log(nameInput);
    // condition for validate form
    if (nameInput == "") {
        alert('Name must be fillet out');
    } 
    // Display result form
    document.getElementById('result-form').innerHTML = nameInput;
     
}

document.getElementById('submit-btn').addEventListener('click', formValidation);

changeBackground();

// function to change background banner
function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-Image');
    console. log(bannerList);
}