const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = ""
let password2 = ""

let btnEl = document.getElementById("btn") 
let password1El = document.getElementById("password1")

function generatePassword() {
    for (let i = 0; i < 15; i++) {
        let randomNum = Math.floor(Math.random() * characters.length )
        password1 += characters[randomNum] 
    }
    console.log(password1)
    password1El.textContent = password1
}

btnEl.addEventListener("click", function() {
    generatePassword()
})

