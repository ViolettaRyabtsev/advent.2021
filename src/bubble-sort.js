function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = i - 1; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  //start looping
  // start
  return arr;
}

function merging(arr1, arr2) {
  let resArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resArr.push(arr1[i]);
      i++;
    }
    if (arr2[j] < arr1[i]) {
      resArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    resArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    resArr.push(arr2[j]);
  }

  return resArr;
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merging(left, right);
  //split
  //split while is 1  or 0 value in arr with recursion
  // cal mergeSort again while condition works
}

function helper(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  //grab the pivot
  let pivot = arr[start];
  var swapIndex = start;
  //store the current pivot in a variable
  //loop through arr
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  //if pivot > then val increment the pivot
  //index variable and swap the current element with element on the pivot index
  //swap the starting element with pivot index
  //return the pivot index
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = helper(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
  //call the pivot in the beginning
  //recursively call left and right side points
}
