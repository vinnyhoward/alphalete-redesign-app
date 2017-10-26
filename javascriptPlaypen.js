// var string = "?q=hex"

// function searchFilter(string) {
//   const firstString = string[0] + string[1] + string[2]
//   if( firstString === '?q=')
//     return string.split('').slice(3).join('')
// }

// searchFilter(string);

// console.log(Boolean(searchFilter(string)));

var x = 5
x;

var array =[127, 15, 4, 7, -7, 2, 1, 12, 1000, 7]


function bubbleSort(a) {
  let swapped = false;
  let count = 0;
  do{
    swapped = false
    for ( var i = 0; i < a.length; i++) {
      count++;
      if(a[i] > a[i + 1]) {

        const temp = a[i]

        a[i] = a[i + 1];
        a[i +1] = temp;
        swapped = true
      }
    }
  } while (swapped)
count;
}

bubbleSort(array);
console.log(array);



var hardAssArray =[127, 15, 4, 7, -7, 2, 1, 12, 1000, 7, -0, 23, 499, 32, 20, -1, -999, 23, 9, 234, 923, 3412, -2, -11]

function bubbleSorter(arr) {
let swapped = true;
while (swapped) {
  swapped=false;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i+ 1]) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp
      swapped = true
    }
  }
}
}

bubbleSorter(hardAssArray);
console.log(hardAssArray);