const num = [1];

function numArr(arr, decrement, count = 0) {
    if (arr.every(item => item <= 0)) {
        return { result: arr, count };
    }

    const result = arr.map(item => (item <= decrement ? 0 : item - decrement));
    
    return numArr(result, decrement, count + 1);
}

const { result, count } = numArr(num, 2);

console.log("Result:", result); 
console.log("Number of times decreased:", count); 


function findThreeCharacterMatches(str) {
    let matches = [];
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] === str[i + 1] && str[i] === str[i + 2]) {
            matches.push({
                characters: str[i] + str[i + 1] + str[i + 2],
                value: str[i]
            });
        }
    }
    return matches.forEach(item=>{
         console.log(item.characters);

    })
}

let str = "23456787654323355533";
let threeCharMatches = findThreeCharacterMatches(str);
