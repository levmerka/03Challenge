// Assignment Code
var generateBtn = document.querySelector("#generate");
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numeric = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`0`]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// at least 8 characters
// 
function generatePassword(){
  // const isNumeric =window.confirm ("Would you like to include numeric?")
  // if(isNumeric==false){
  //   return `please say ok`
  // }
  const ret=[]
  for(let x = 0; x < 6; x++){  
   ret.push(randomItem(alphabet))
  }
  return ret
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function randomItem(arr) {
 const randomIndex = Math.floor(Math.random() * arr.length); 
 const item = arr[randomIndex];
 return item
} 

const newArray = [...alphabet, ...numeric]