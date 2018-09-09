const assert = require('chai').assert;
var expected,current;

before(function(){
    expected = ['a','b','c','d'];
})

describe('String#split',function(){
    beforeEach(function(){
        current = 'a,b,c'.split(',');
    })
    it('should return an array',function(){
        assert.notEqual(Array.isArray(current));
    })
    it('should return the same array',function(){
        assert.equal(expected.length,current.length,'Array has same length');
        for(var i=0;i<expected.length;i++){
            assert.equal(expected[i],current[i],`${i} element is same`);
        }
    })
})