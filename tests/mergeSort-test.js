import {expect, assert} from 'chai';
import mergeSort from '../scripts/mergeSort.js';
import genRanNum from '../scripts/genRanNum.js';

describe('Merge Sort', () => {
  it('should be a function', () => {
    assert.isFunction(mergeSort);
  })

  it('should return an array of equal length', () => {
    let result = mergeSort([10, 2, 89, 3, 44, 45, 13]);

    expect(result.length).to.equal(7);
  })

  it('should sort numbers lowest to highest', () => {
    const array = mergeSort([45, 2, 14, 8]);

    expect(array).to.deep.equal([2, 8, 14, 45]);
  })

  it('should sort letters alphabetically', () => {
    const letters = mergeSort(['r', 'e', 'c', 'v']);

    expect(letters).to.deep.equal(['c', 'e', 'r', 'v']);
  })

  it('should be able to sort capital and lowercase letters, with capital printing first', () => {
    const array = mergeSort(['t', 'S', 'T', 'c', 'C', 's']);

    expect(array).to.deep.equal(['C', 'S', 'T', 'c', 's', 't']);
  })
  
  it('should be able to sort large arrays', () => {
    const random = genRanNum(10);
    const sortedArray = [ ...random ].sort((a, b) => a - b);

    expect(mergeSort(random)).to.deep.equal(sortedArray);
  })
})
