function big() {
    var word = 'YurciuYVuycfIYVutxcotUIppfTDO'
    const bigWord = new Array ();
    for (let n = 0; n < word.length; n++) {
        if (word.charCodeAt(n) > 60 && word.charCodeAt(n) <91) 
        {
            bigWord.push(word.charAt(n));
        }
    }
    let bigWordString = bigWord.join("");
    console.log(bigWordString);
}
console.log(big());