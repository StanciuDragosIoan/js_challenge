/*
    Your goal is to create a function that removes the first and last letters 
    of a string. Strings with two characters or less are considered invalid. 
    You can choose to have your function return null or simply ignore.
*/

//sollution 1
const stringPeeler = string => {
  if (string.length <= 2) {
    console.log('error...');
  } else {
    let arrayString = string.split('');
    arrayString.shift(0);
    arrayString.pop(arrayString.length - 1);
    output = '';
    arrayString.forEach(item => {
      output += item;
    });
    console.log(output);
  }
};

// stringPeeler('test');

//sollution 2
const stringPeel = input => {
  if (input.length > 2) {
    stringPeeled = input.substring(1, input.length - 1);
    console.log(stringPeeled);
  } else {
    console.log('string 2 short');
  }
};

// stringPeel('input');

//3rd sollution
const stringPeelerFunction = input => {
  input.length > 2
    ? console.log(input.substring(1, input.length - 1))
    : console.log('string 2 short');
};

// stringPeelerFunction('mama');
