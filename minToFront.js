const minToFront = (arr) => {
    var lowest = arr[0];
    var newArr = []

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < lowest){
            lowest = arr[i]
        }
    }

    for(var i = 0; i < arr.length; i++){
        newArr[0] = lowest
        if(arr[i] == lowest){
            i++
        }
        newArr.push(arr[i])
    }
    console.log(newArr)
}
minToFront([4,2,1,3,5,-3,8])