var word1 = ' liuawehti ey t4tw5 w t twt wt 3wy w';
const word2 = [];
for (let i = 0; i < word1.length; i++) {
    if (word1.charAt(i) != " ") {
        word2.push(word1.charAt(i));
    } 
}
var word3 = word2.join("");
console.log(word3);

