// 1 w/o using .push() method
// const pushFront = (array, val) => {
//     let newArr = []
//     newArr[0] = val
//     for(var i = 0; i < array.length; i++) {
//         newArr[newArr.length] = array[i]
//     }
//     console.log(newArr)
// }
// pushFront([6,7,8,1], 99)


// 2 w/o using .pop()
// const popFront = (array) => {
//     let removed = array[0]
//     let newArr = []
//     for (var i = 1; i < array.length; i++) {
//         newArr[newArr.length] = array[i]
//     }
//     console.log(newArr +" | "+ "This one was removed:" + removed)

// }
// popFront([1,3,5,7])



// 3 w/o using .push()
// const insertAt = (arr, iex, val) => {
//     let newArr = []
//     for(var i = 0; i < arr.length; i++) {
//         if(i === iex) {
//             newArr[newArr.length] = val
//         }
//         newArr[newArr.length] = arr[i]
//     }
//     console.log(newArr)
// }
// insertAt([100, 200, 5], 2, 311)


//4
// const removeAt = (arr, iex) => {
//     let removed = ""
//     let newArr = []
//     for(var i = 0; i < arr.length; i++) {
//         if(i == iex){
//             removed = arr[i]
//             i++
//         }
//         newArr[newArr.length] = arr[i]
//     }
//     console.log(newArr + "  |  " + "value that was removed: " + removed)
// }
// removeAt([1,3,5,6,7,8], 0)


// 5
// const swapPairs = (arr) => {
//     let newArr = []
//     for(var i = 0; i < arr.length; i++) {
//         if( i == 0){
//             newArr[1] = arr[0]
//             i++
//         }
//         if(i == 1) {
//             newArr[i - 1] = arr[i]
//             i++
//         }
//         if(i %2 == 0){
//             newArr[i] = arr[i + 1]
//             i++
//         }
//         if(i %2 == 1){
//             newArr[i] = arr[i - 1]
//             i++
//         }
//     }
//     console.log(newArr)
// }
// swapPairs([4,3,5,8,7,9])



// 6
// const removeDuplicates = (list) => {
//     let newArr = []
//     for(var i = 0; i < list.length; i ++){
//         if(list[i] == list[i -1]){
//             continue;
//             i++
//         }
//         else{
//             newArr[newArr.length] = list[i]
//         }
//     }
//     console.log(newArr)
// }
// removeDuplicates([9,19,19,19,19,19,19,29])