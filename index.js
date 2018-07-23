function iterativeLog(array){
  array.forEach(console.log(`${index}: ${element}`))
}

function iterate(callback){
  arr=new Array()
  arr=[1,2,3,4,5,6]
  iterativeLog(arr)
  return arr
}
