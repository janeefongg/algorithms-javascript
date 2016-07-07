var expect = require('expect.js');

var checkPermutation = require('../data-structures/arrays-strings/checkPermutation').checkPermutation;

describe('Arrays and Strings', function(){
  it('should check if a string is a permutation of the other', function(){

    expect(checkPermutation('ayy', 'yay')).to.be(true);
  });

});