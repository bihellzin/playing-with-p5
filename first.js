function setup() {
  createCanvas(1280, 640);
  background(0);
}


function draw() {  
  
  if(mouseIsPressed){
    setup();
    let arr = shuff(createArray());
  
    for (let i = 1; i <= 1280; i++){
      ellipse(i, arr[i-1], 3, arr[i-1]);
    }
  } 
}


function createArray(){
  let arr = [];
  for (let i = 1; i <= 1280; i++){
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

