// Jawaban Untuk Soal Algoritma

// Soal 1
function funtionReverse(s) {
    let reverse = s.split("")
    let numS = reverse.filter((v) => {
        return !isNaN(v)
    }).join("")
    let sWithoutNum = reverse.filter((v) => {
        return isNaN(v)
    }).reverse().join("")
    console.log(sWithoutNum + numS)
    return sWithoutNum + numS
}
funtionReverse("NEGIE1")

// Soal 2
function findLongest(s) {
    let spl = s.split(' ')
    console.log(spl)
    const longestWord = spl.reduce(function (longest, currentWord) {
        if (currentWord.length > longest.length)
            return currentWord;
        else
            return longest;
    }, "");
    console.log(longestWord)
    return longestWord;
}

findLongest("Saya sangat senang mengerjakan soal algoritma")

//   Soal 3
let INPUT = ['xc', 'dz', 'bbb', 'dz']
let QUERY = ['bbb', 'ac', 'dz']
countQuery(INPUT, QUERY)
function countQuery(input, que) {
    console.log(que, input)
    let temp = que.map((v, i) => {
        return input.filter(v => v === que[i]).length
    })
    console.log(temp)
}

// Soal 4
let Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
// 1 2 0
// 4 5 6
// 7 8 9
function findSumDiagonal(arr) {
    const n = arr.length;
    let d1 = 0;
    let d2 = 0;
    for (let i = 0; i < n; i++) {
        console.log("Ini i",i)
        for (let j = 0; j < n; j++) {
            console.log("Ini J",j)
            // finding the sum of primary diagonal
            if (i === j) {
                d1 += arr[i][j];
            }
            // finding the sum of secondary diagonal
            if (i + j === n - 1) {
                d2 += arr[i][j]
            }
        }
    }
    console.log(Math.abs(d1 - d2))
    return Math.abs(d1 - d2)
}
findSumDiagonal(Matrix)