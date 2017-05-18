import {expect, assert} from 'chai';
import insertionSort from '../scripts/insertionSort.js'
import genRanNum from '../scripts/genRanNum.js';

describe('Insertion sort', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it('should be a function', () => {
    const numbers = [ "m", "d", "b", "a", "l", "z", "c"]
    const sorted = insertionSort(numbers);

    expect(sorted).to.deep.equal(numbers.sort())
  })

  it('should sort large arrays', () => {
    const randomArray = genRanNum(100);
    const compSorted = [ ...randomArray ].sort((a, b) => a - b);

    expect(insertionSort(randomArray)).to.deep.equal(compSorted);
  })

  it('should move min number to front', () => {
    const randomArray = insertionSort(genRanNum(100));
    const min = Math.min(...randomArray);

    expect(randomArray[0]).to.deep.equal(min)
  })
})
