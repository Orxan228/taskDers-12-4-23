function little() {
    var word = 'YurciuYVuycfIYVutxcotUIppfTDO'
    n = 0;
    while (n<= word.length-1) {
        if (word.charCodeAt(n) > 96 && word.charCodeAt(n) <123) {
            console.log(word.charAt(n));
        }
        n++;
    }
}
console.log(little());