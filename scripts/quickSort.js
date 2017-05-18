
const sortThis = [4, 9, 1, 10, 3]

const quickSort = (array) => {
  let left = []
  let right = []
  let pivot = array[0]

  if (array.length < 2) {
    return array
  }

  for (let i = 1; i < array.length; i++) {
    (pivot > array[i]) ? left.push(array[i]) : right.push(array[i])
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

quickSort(sortThis);

export default quickSort;
