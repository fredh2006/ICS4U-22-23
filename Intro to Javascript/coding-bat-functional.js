function doubling(numList){
    let arr = [];
    for (const num of numList) {
        arr.push(num*2);
    }
return arr;
}

//console.log(doubling([1, 2, 3]));

function copies3(stringList){
    let arr = [];
    for (const string of stringList) {
        let stringThree = string + string + string;
        arr.push(stringThree);
    }
    return arr;
}

//console.log(copies3(["a", "b", "c"]));

function rightDigit(numList){
    let arr = [];
    for (const num of numList) {
        arr.push(num%10);
    }
    return arr;
}

console.log(rightDigit([16, 8, 886, 8, 1]))
