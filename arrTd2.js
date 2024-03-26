// const reverse = (arr) => {
//     let idx = 0
//     let holder = ''
//     for(var i = arr.length - 1; i >= 0; i--) {
//         // i + 1 == idx when arr is even
//             // i == idx when arr is odd
//         if( i == idx){
//             break
//         }
//         holder = arr[idx]
//         arr[idx] = arr[i]
//         arr[i] = holder
//         if(idx <= arr.length) {
//             idx++
//         }
//     }
//     console.log(arr)
// }
// reverse([1,2,3,4,5])




// const rotateArr = (arr, offset) => {
//     for(var i = 0; i < arr.length; i++) {
//         var temp = '';
//         temp = arr[i];
//         arr[i + offset + 1] = temp;
//     }
//     console.log(arr)
// }
// rotateArr([1,2,3,4,5], 1)


// const FilterRange = (arr, min, max) => {
//     var filtered = []
//     for(var i = 0; i < arr.length; i ++){
//         if(arr[i] > min && arr[i] < max){
//             filtered.push(arr[i])
//         }
//     }
//     console.log(filtered)
// }

// FilterRange([1,2,3,4,5,6,7,8,9,10],2,9)


// const Concat = (arr, arr2) => {
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         newArr.push(arr[i])
//     }
//     for(var i = 0; i < arr2.length; i++){
//         newArr.push(arr2[i])
//     }
//     console.log(newArr)
// }
// Concat([1,2,3,4,5],[6,7,8,9,10])