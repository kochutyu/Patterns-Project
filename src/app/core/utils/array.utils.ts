export class UArray {

  public static insert(arr, index, newItem) {
    return [
      ...arr.slice(0, index), // part of the array before the specified index
      newItem, // inserted item
      ...arr.slice(index) // part of the array after the specified index
    ]
  }

}
