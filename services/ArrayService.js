module.exports = class ArrayService {
  static binarySearch(array, target) {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
      const middle = Math.floor((right + left) / 2)
      if (array[middle] > target) {
        right = middle - 1
      } else if (array[middle] < target) {
        left = middle + 1
      } else {
        return middle
      }
    }

    return null
  }
}