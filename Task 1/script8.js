var word = 'erngoeerpmhwa3omhw';
const word2=[];
for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) != "a" && word.charAt(i) != "e") {
        word2.push(word.charAt(i));
    }    
}
var result = word2.join("");
console.log(result);