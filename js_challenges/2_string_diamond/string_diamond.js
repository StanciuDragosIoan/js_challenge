/*
    The shape that the print method will return should resemble a diamond. 
    A number provided as input will represent the number of asterisks 
    printed on the middle line. The line above and below will be centered 
    and will have two less asterisks than the middle line. This reduction 
    will continue for each line until a line with a single asterisk is printed 
    at the top and bottom of the figure.

    Return null if input is an even number or a negative number.

    Note: JS and Python students must implement diamond() 
    method and return None (Py) or null(JS) for invalid input.

        #
       ###
      #####
     ####### 
      #####
       ###
        # 
*/

//calculate number of shards per row
//calculate number of rows
//build diamond

//1,2,3,4,5,6

//1 -> 1
//2-> 3
//3-> 5
//4-> 7
//5-> 9
//6 -> 11

/*  
  1
  3  // %3-> 0
  1

  1
  3 // %3-> 0
  5 // %3-> 2
  3
  1

  1
  3 // %3-> 0
  5 // %3-> 2
  3 // %3-> 0
  1

  1
  3 // %3-> 0
  5 // %3-> 2
  7 // %3-> 1
  9 // %3-> 0
  7
  5
  3
  1
*/

const diamondFunction = shardsOnMiddleLine => {
  if (shardsOnMiddleLine % 2 === 1) {
    let shard = ' * ';
    let middleRow = '';
    for (let i = 1; i <= shardsOnMiddleLine; i++) {
      middleRow += shard;
    }
    console.log(middleRow);
  } else {
    console.error('error input is odd');
  }
};

diamondFunction(25);

/*
  1
  3
  5
  7
  9
  11
  13
  15
  17
  19
  21
  23
  25
  23
  21
  19
  17
  15
  13
  11
  9
  7
  5
  3
  1
*/
