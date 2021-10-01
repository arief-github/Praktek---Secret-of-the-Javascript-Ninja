function mapper(f){
	return a => map(a,f)
}

const increment = x => x+1
const incrementAll = mapper(increment)
const fixIncrement = incrementAll([1,2,3])

console.log(fixIncrement)