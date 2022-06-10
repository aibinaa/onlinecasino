// const countTrue = (arr) => {
//     return arr.filter(e => e).length
// }
// console.log(countTrue([true, false, false, true, false]))
// console.log(countTrue([false, false, false]))


const sevenBoom = (arr) => {
    // return [...new Set(arr.map(e => arr.includes(7) == e ? "Boom" : 'no 7'))].toString()
    return arr.join('').indexOf('7') !== -1 ? 'Boom' : "No boom"
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([1, 2, 3, 4, 5, 6]))