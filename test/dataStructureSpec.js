var expect = require('expect.js');

var checkPermutation = require('../data-structures/arrays-strings/checkPermutation');
var isUnique = require('../data-structures/arrays-strings/isUnique').isUnique;
var isUnique2 = require('../data-structures/arrays-strings/isUnique').isUnique2;
var urlify = require('../data-structures/arrays-strings/urlify');
var oneAway = require('../data-structures/arrays-strings/oneAway');
var stringCompression = require('../data-structures/arrays-strings/stringCompression');
var stringRotation = require('../data-structures/arrays-strings/stringRotation');
var zeroMatrix = require('../data-structures/arrays-strings/zeroMatrix');

describe('Arrays and Strings', function(){
  it('should check if a string is a permutation of the other', function(){

    expect(checkPermutation('ayy', 'yay')).to.be(true);
  });

  it('should remove duplicates from an input string', function(){

    expect(isUnique('banana')).to.equal('ban');
    expect(isUnique2('banana')).to.equal('ban');
  });
  
  it('should fill the empty spaces in an input string with %20', function () {
    expect(urlify('Mr John Smith   ', 13)).to.be('Mr%20John%20Smith');
    expect(urlify('Hello, Jane!', 12)).to.be('Hello,%20Jane!');
  });

  it ('should check if an input is one edit away from being the same as the second input', function () {
    expect(oneAway('pale', 'ple')).to.be(true);
    expect(oneAway('pales', 'pale')).to.be(true);
    expect(oneAway('pale', 'bale')).to.be(true);
    expect(oneAway('pale', 'bake')).to.be(false);
  });
  
  it('should compress a string and return a new string with the letter and its count', function () {
    expect(stringCompression('aabccccca')).to.equal('a2b1c5a1');
  });

  it('should return a boolean depending on whether or not str1 is a rotation of str2', function () {
    expect(stringRotation('waterbottle', 'erbottlewat')).to.be(true);
  });

  it('should return a matrix where entire row and column are set to 0 at the index found', function () {
    expect(zeroMatrix([[0, 1, 2, 3], [5, 6, 7, 8], [9, 11, 3, 4]])).to.eql([[0, 0, 0, 0], [0, 6, 7, 8], [0, 11, 3, 4]]);
  });

});
