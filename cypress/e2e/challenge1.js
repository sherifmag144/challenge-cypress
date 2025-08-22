function reverseWords(str) {
    let arr = str.split("");
    let start = 0;
    for (let end = 0; end <= arr.length; end++) {
        if (end === arr.length || arr[end] === " ") {
            reverse(arr, start, end - 1);
            start = end + 1;
        }
    }
    return arr.join("");
}
function reverse(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]; // swap
        left++;
        right--;
    }
}
// Example
let s = "i love programming very much";
console.log(reverseWords(s));
