function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {

    console.log(array);
    for (var j = i; j >= 0 && array[j] > array[j + 1]; j--) {

      [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ];
    }
  }
  return array;
}

//insertionSort([ "m", "d", "b", "a", "l", "z", "c"]);

export default insertionSort;
