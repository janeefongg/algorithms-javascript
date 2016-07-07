var expect = require('expect.js');

var checkPermutation = require('../data-structures/arrays-strings/checkPermutation').checkPermutation;
var isUnique = require('../data-structures/arrays-strings/isUnique').isUnique;
var isUnique2 = require('../data-structures/arrays-strings/isUnique').isUnique2;

describe('Arrays and Strings', function(){
  it('should check if a string is a permutation of the other', function(){

    expect(checkPermutation('ayy', 'yay')).to.be(true);
  });

  it('should remove duplicates from an input string', function(){

    expect(isUnique('banana')).to.equal('ban');
    expect(isUnique2('banana')).to.equal('ban');
  });

});
