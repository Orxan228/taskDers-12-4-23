var word = 'erngoeerpmhwa3omhw';
const word2=[];
for (let i = 0; i < word.length-2; i++) {
    word2.push(word.charAt(i+1));  
}
var result = word2.join("");
console.log(result);