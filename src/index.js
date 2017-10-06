module.exports = function multiply(first, second) {
    var reversedArray1 = first.split("").reverse();
    var reversedArray2 = second.split("").reverse();
    var resultArray = [];
    var length1 = reversedArray1.length;
    var length2 = reversedArray2.length;
 
    for ( var i = 0; i < length1; i++ ) {
        for ( var k = 0; k < length2; k++ ) {
            var resultIndex = i + k;
            resultArray[resultIndex] = reversedArray1[i] * reversedArray2[k] + ( resultIndex >= resultArray.length ? 0 : resultArray[resultIndex] );
 
            if ( resultArray[resultIndex] > 9 ) {
                resultArray[resultIndex + 1] = Math.floor( resultArray[resultIndex] / 10 ) + ( resultIndex + 1 >= resultArray.length ? 0 : resultArray[resultIndex + 1] );
                resultArray[resultIndex] = resultArray[resultIndex] % 10;
            }
        }
    }
    return resultArray.reverse().join("");
