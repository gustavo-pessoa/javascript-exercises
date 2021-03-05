const nums = [1, 2, 3, 4, 5]

let result = nums.map(e => e * 2)


console.log(result)

const soma10 = e => e + 10
const triplo = e => e * 3


result = nums.map(soma10).map(triplo)
console.log(result)

