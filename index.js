const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password = document.getElementById("first-pass")
let length = 0


function generate(){
    password.textContent=""
    length = prompt("Enter password length: ")
    for (let i = 0; i <length; i++){
      randomPass=characters[Math.floor(Math.random()*characters.length)]
      password.textContent+=randomPass
  }
}

function reGenerate() {
  password.textContent=""
  for (let i = 0; i <length; i++){
    randomPass=characters[Math.floor(Math.random()*characters.length)]
    password.textContent+=randomPass
  }
}
function copyPassword() {
    const password = document.getElementById("first-pass");
    navigator.clipboard.writeText(password.textContent).then(function() {
      console.log("Password copied to clipboard");
    }, function(err) {
      console.error("Could not copy password: ", err);
    });
  }
  