// hof = higher order functions

let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.map((data) => console.log(data))

const multipleOfTwo = arr.map((data) => (data*2))
console.log(multipleOfTwo)

const DivisibleByThree = arr.filter((data) => (data%3 == 0))
console.log(DivisibleByThree)


const FirstDivisibleByThree = arr.find((num) => num%3 == 0)
console.log(FirstDivisibleByThree)

const SumOfArr = arr.reduce((data ,acc) => acc+=data,0)
console.log(SumOfArr)