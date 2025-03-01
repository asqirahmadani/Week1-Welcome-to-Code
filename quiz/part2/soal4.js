// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

let secondword = word4.substring(4, 14);
let thirdword = word4.substring(15, 17);
let fourthword = word4.substring(18, 20);
let fifthword = word4.substring(21, 25);

let secondWordLength = secondword.length;
let thirdWordLength = thirdword.length;
let fourthWordLength = fourthword.length;
let fifthWordLength = fifthword.length;

console.log('Second Word: ' + secondword + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdword + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthword + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthword + ', with length: ' + fifthWordLength);