import {expect} from 'chai';
import quickSort from '../scripts/quickSort.js';
import genRanNum from '../scripts/genRanNum.js';

describe('quickSort', () => {
  it('should exist', () => {
    expect(quickSort).to.exist
  })

  it('should be a function', () => {
    expect(quickSort).to.be.instanceOf(Function)
  })

  it('should sort an array of numbers', () => {
    const array = [19, 3, 10, 15, 4, 2]
    const answer = [2, 3, 4, 10, 15, 19]

    expect(quickSort(array)).to.deep.equal(answer);
  })

  it('should sort letters alphabetically', () => {
    const unsorted = ['t', 'c', 'e', 'r']
    const sorted = ['c', 'e', 'r', 't']

    expect(quickSort(unsorted)).to.deep.equal(sorted)
  })

  it('should sort large arrays', () => {
    const randomArray = genRanNum(100);
    const compSorted = [ ...randomArray ].sort((a, b) => a - b);

    expect(quickSort(randomArray)).to.deep.equal(compSorted);
  })
})
