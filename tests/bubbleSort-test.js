import {expect, assert} from 'chai';
import bubbleSort from '../scripts/bubbleSort.js'
import genRanNum from '../scripts/genRanNum.js'

describe('Bubble Sort with filter', () => {
  it('should be a function', () => {
    assert.isFunction(bubbleSort)
  })
  it('should be a function', () => {
    const numbers = [5, 3, 2, 1]
    const sorted = bubbleSort(numbers);

    expect(sorted).to.deep.equal([1, 2, 3, 5])
  })
  it('should sort large arrays', () => {
    const randomArray = genRanNum(100);
    const compSorted = [ ...randomArray ].sort((a, b) => a - b);

    expect(bubbleSort(randomArray)).to.deep.equal(compSorted);
  })
  it('should move min number to front', () => {
    const randomArray = bubbleSort(genRanNum(100));
    const min = Math.min(...randomArray)

    expect(randomArray[0]).to.deep.equal(min)
  })
})
