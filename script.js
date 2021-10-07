/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

const diagonalDifference = (arr) => {
    let diagonalLeft = 0;
    for(let row = 0; row < arr[0].length; row++) {
        for(let column = 0; column < arr[0].length; column++) {
            if(column === row) {
                diagonalLeft +=arr[row][column];
            }          
        }
    }
    // console.log(diagonalLeft);
    
    let diagonalRight = 0;
    for(let row = 0; row < arr[0].length; row++) {
        for(let column = arr[0].length - 1; column >= 0; column--) {
            if(row + column === arr[0].length - 1) {
                diagonalRight +=arr[row][column];
            }
        }
    }
    // console.log(diagonalRight);
    
    const findDifference = Math.abs(diagonalLeft - diagonalRight);
    return findDifference;
}


//////////////////////////////////////////////////////////////////////
const diagonalDifference = (arr) => {
  const diagonalLeft = arr.reduce((acc, ar, idx) => acc + ar[i], 0);
  const diagonalRight = arr.reduce((acc, ar, i) => acc + ar[ar.length - 1 - i], 0);
  return Math.abs(diagonalLeft - diagonalRight); 
}
