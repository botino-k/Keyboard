/*function formatDuration (seconds) {
  const obg={
    now:0,
    second:1,
    seconds:59,
    minute:60,
    minutes:3599,
    hour:3600,
    hours:86399,
    day: 86400,
    days:31535999,
    year:31536000,
    years: 31536000
  }

  let ourSeconds; 
   for (let i in obg) { 
if (seconds>=obg[i]){ourSeconds=i;continue}}

console.log(ourSeconds)
console.log(obg[`${ourSeconds}`])

let readableFormat= `${seconds/obg[`${ourSeconds}`]}`
return readableFormat

}


console.log(formatDuration(63));
console.log(formatDuration(120));
console.log(formatDuration(36620025));
console.log(formatDuration(3662));*/



/*var runLengthEncoding = function(str){
  console.log(str.split(' '))
  return [ ] 
}

console.log(runLengthEncoding("hello world!"))
console.log(runLengthEncoding ("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"))*/


function recycle(array) {
  const obg = {
    paper:[],
    glass:[],
    organic:[],
    plastic:[]
  }

  /*for(const type of array) {

    console.log(type)
  }*/

  for(let i=0; i<array.length; i++){
    console.log(array[i]['type'])
  }

  return
}

console.log(recycle([
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
]));