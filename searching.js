

// linear
let array = [3,354,45,443,435,57]

let search = 45

let result = (array) =>{
  for(let i = 0 ; i<array.length ; i++)
  {
    if(array[i]===search)
    {
      return i
    }
  }
}

console.log(result(array))

//binary searching

array.sort((a,b) => a-b)
let array = [3, 45, 57, 354, 435, 443];

let startValue = 0;
let endValue = array.length - 1;
let searchItem = 354;
function binarySearching(array) {
  while (startValue <= endValue) {
    let mid = startValue + Math.floor((endValue - startValue) / 2);
    // let mid = Math.floor((startValue + endValue) / 2);

    if (array[mid] === searchItem) return mid;
    else if (searchItem < array[mid]) endValue = mid - 1;
    else startValue = mid + 1;
  }

  return -1;
}

console.log(binarySearching(array));
