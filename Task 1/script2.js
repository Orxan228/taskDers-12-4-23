function little() {
    var word = 'YurciuYVuycfIYVutxcotUIppfTDO'
    for (let n = 0; n < word.length; n++) {
        if (word.charCodeAt(n) > 96 && word.charCodeAt(n) <123) {
            console.log(word.charAt(n));
        }
    }
}
console.log(little());