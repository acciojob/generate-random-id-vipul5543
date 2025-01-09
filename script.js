function makeid(l) {
  // write your code here
let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let res = "";
  for(let i = 0;i<l;i++){
      const randomIndex = Math.floor(Math.random()*characters.length);
      res = res + characters[randomIndex];
  }
	return res;	
}


// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
