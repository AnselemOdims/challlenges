function stray(numbers) {
  const obj = {}
  for(let i=0; i<numbers.length; i++){
    obj[numbers[i]] = obj[numbers[i]] + 1 || 1
  }
  for(let val in obj){
    if(obj[val]===1){
      return Number(val)
    }
  }
}
