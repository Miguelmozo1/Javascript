const RemoveNegatives = (arr) => {
    var negatives = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negatives[negatives.length] = arr[i]
        }
    }
    console.log(negatives)
    console.log(arr)
}
RemoveNegatives([-3,-4,-6,4,5,6])
    // need to find way to replace the negatives when they're found so that arr is left with just positives