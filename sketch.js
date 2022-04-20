function setup() {
  createCanvas(400, 400);
  let noiseScale = 1/125;
  let water = color(72,100,212);
  let shore = color(246,243,160)
  let land = color(33,150,35)
  
  for (let i=0; i<height; i++){
    for (let j=0; j<width; j++){
      let n = noise(i*noiseScale, j*noiseScale);
      if (n<0.4){
        set(i,j,water);
      }
      else if (n<0.5){
        set(i,j,shore);
      }
      else if (n>0.5){
        set(i,j,land);
      }
    }
  }
  updatePixels();
}