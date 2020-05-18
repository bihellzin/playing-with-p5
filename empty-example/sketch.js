function setup() {
  createCanvas(852, 900);
  background(0);
}


function draw() {  
  
  if(mouseIsPressed){
    setup();
    let arr = createArray();
    
    for (let i = 0; i < arr.length; i += 2){
      rect(i, 900-arr[i], 2, arr[i])
    } 
  } 
}


function createArray(){
  let arr = [];
  for (let i = 1; i <= 850; i++){
   arr.push(i)
 }
  return arr
}

function shuff(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}