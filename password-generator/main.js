// Array to store all possible characters that password can have
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Retrieve DOM elements and assign to variables
let btnEl = document.getElementById("btn") 
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")

// Create function to create password
function generatePassword() {
    // Declare 2 strings to store the generated password
    let password1 = ""
    let password2 = ""
    // Loop through each character
    for (let i = 0; i < 15; i++) {
        // Generate random index numbers to randomise character selection
        let randomNum = Math.floor(Math.random() * characters.length )
        let randomNum1 = Math.floor(Math.random() * characters.length )
        // Add random characters to empty strings
        password1 += characters[randomNum] 
        password2 += characters[randomNum1]
    }
    console.log(password1)
    password1El.textContent = password1
    password2El.textContent = password2
}

// This makes the html button interactive
btnEl.addEventListener("click", function() {
    generatePassword()
})