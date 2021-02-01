/*## **PROJECT: Credit Card Validator**

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.

For example, the following credit card numbers are valid:

```markdown
9999777788880000
6666666666661666
```

And the following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.
- Use `node` from the command line to test if your code works as expected.

Good luck!
*/
let cardNum = 123456234;

function cardValidator (num) {
    let strNum = (num +'').split('');//turns the number in an array of strings
    let arrNum = [];
    for(let i = 0; i < strNum.length; i++) {
        if(typeof +strNum[i] === 'number') strNum.push(strNum[i]);
        else return 'Not a valid credit card number';
    };
    if(strNum.length !== 16) return 'Not a valid credit card number';//checks the length of the string
    if(strNum[strNum.length-1] % 2 !== 0) return 'Not a valid credit card number';//checks if the last number is even
    if(Math.min(arrNum) === Math.max(arrNum)) return 'Not a valid credit card number';//checks if at least 2 numbers present
    console.log(Math.min(+strNum[strNum.length-1]));
    console.log(Math.max(arrNum));
}

console.log(cardValidator(cardNum));