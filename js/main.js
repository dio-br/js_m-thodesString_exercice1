let phrase = 'Bonjour tout le monde      '
console.log(`${phrase.length}`);
console.log(`${phrase.trim()}`);
console.log(phrase);
console.log(phrase.substr(20));
console.log(phrase.slice(8, 45));
console.log(phrase.slice(0, 45));
console.log(phrase.slice(0, 7));

let phrase2 = "Ceci est une variable de type number !"
const regex = /number/gi;
console.log(phrase2.replace(regex, 'string'));

let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"

console.log(phrase3.toLowerCase());