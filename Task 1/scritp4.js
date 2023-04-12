function numToChar() {
    const nums = [1 ,6,45, 34, 3, 100];
    const numsToChar = [];
    for (let i = 0; i < nums.length; i++) {
       numsToChar.push(String.fromCharCode(nums[i]));
    }
    console.log(numsToChar);
}
console.log(numToChar());