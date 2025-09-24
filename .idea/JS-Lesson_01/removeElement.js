function removeElement(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value){
            arr.splice(i,1);
        }
    }
    return arr;
}

console.log(removeElement([1,2,3,4,5], 2));
console.log(removeElement([1,2,3,4,5]));