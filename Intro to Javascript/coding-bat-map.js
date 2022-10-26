function word0(strings) {
    let map = new Map();
    for (const string of strings) {
        map.set(string, 0);
    }
    return map;
}

//console.log(word0(["a", "b", "a", "b"]));

function wordCount(strings){
    let map = new Map();
    for (const string of strings) {
         if(!map.has(string)){
            map.set(string, 1)
         }else{
            let count = map.get(string)
            map.set(string, count+1)
         }
    }
    return map;
}

//console.log(wordCounqt(["a", "b", "a", "c", "b"]));

function wordMultiple(strings){
    let map = new Map();
    for (const string of strings) {
        if(!map.has(string)){
           map.set(string, false)
        }else{
           let count = map.get(string)
           map.set(string, true)
        }
   }
   return map;
}

console.log(wordMultiple(["a", "b", "a", "c", "b"]));