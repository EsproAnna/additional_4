module.exports = function multiply(first, second) {
    var reversedArray1 = first.split("").reverse();
    var reversedArray2 = second.split("").reverse();
    var resultArray = new Array;
 
    for ( var i = 0; i < reversedArray1.length; i++ ) {
        for ( var k = 0; k < reversedArray2.length; k++ ) {
            var resultIndex = i + k;
            resultArray[resultIndex] = reversedArray1[i] * reversedArray2[k] + ( resultIndex >= resultArray.length ? 0 : resultArray[resultIndex] );
 
            if ( resultArray[resultIndex] > 9 ) {
                resultArray[resultIndex + 1] = Math.floor( resultArray[resultIndex] / 10 ) + ( resultIndex + 1 >= resultArray.length ? 0 : resultArray[resultIndex + 1] );
                resultArray[resultIndex] -= Math.floor( resultArray[resultIndex] / 10 ) * 10;
            }
        }
    }
    return resultArray.reverse().join("");
}
