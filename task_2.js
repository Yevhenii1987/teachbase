const arr1 = [0,1,2,3,44,47,2,65]
const arr2 = [0,1,2,3,44,47,2,65]

function compareArrays(array1, array2) {
    let isEqual = true

    array1.forEach(function (item, index) {
        if( item !== array2[index] ) {
            isEqual = false
        }
    })

    return isEqual
 }

 console.log(compareArrays(arr1, arr2))