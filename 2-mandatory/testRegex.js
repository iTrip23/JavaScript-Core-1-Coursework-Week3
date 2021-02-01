const passwords = ["StUFf27%", "Ll3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];
let englishUpper = /[A-Z]+/;
console.log(passwords.map(string => englishUpper.test(string)));