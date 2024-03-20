// 1
// const removeBlanks = (string) => {
//     var x = string.split(" ").join("")
//     console.log(x)
// }
// removeBlanks("Pl ayTha tF u nkyM usi c")



// 2
// const getDigits = (string) => {
//     for(var i = 0; i < string.length; i ++){
//         if(isNaN(string[i])){
//             continue
//             i++
//         }
//         else{
//             console.log(string[i])
//         }
//     }
// }
// getDigits("0s1a3y5w7h9a2t4?6!8?0")


// 3
// const setAcronym = (string) => {
//     let split = string.split(" ");
//     for(var i = 0; i < split.length; i++){
//         console.log(split[i].toUpperCase()[0])
//     }
// }
// setAcronym("there's no free lunch - gotta pay yer way. ")


// 4
// const nonSpaces = (string) => {
//     var counter = 0;
//     let x = string.split('')

//     let i = 0
//     while(i < x.length){
//         if(x[i] == " "){
//             i++
//         }
//         counter++
//         i++
//     }
//     console.log(counter)
// }
// nonSpaces("Hello world !")



// 5
// const shorterThanVal = (list, val) => {
//     var newList = [];
//     for(var i = 0; i < list.length; i ++){
//         if(list[i].length >= val){
//             newList.push(list[i])
//         }

//     }
//     console.log(newList)
// }
// shorterThanVal(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)