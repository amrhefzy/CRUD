function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var random = getRandomInteger(0,1)

console.log(random);

// switch (random){
//     case 0:
//     random = "It's not what happens to you, but how you react to it that matters --Epictetus"
//     break;
//     case 1:
//     random = "In the midst of chaos, there is also opportunity. --Sun Tzu" 
// }
//   console.log(random)


function qoute(){
var random = getRandomInteger(0,10)



switch (random){
    case 0:
    random= "It's not what happens to you, but how you react to it that matters --Epictetus"
    break;
    case 1:
    random =  "In the midst of chaos, there is also opportunity. --Sun Tzu" 
    break;
    case 2:
    random = `"Life is 10% what happens to us and 90% how we react to it." — Charles R. Swindoll` 
    break;
    case 3:
    random= `"You can't control what happens to you, but you can control how you react to it." — Unknown`
    break;
    case 4:
    random =  `"The only thing that is constant is change." — Heraclitus`
    break;
    case 5:
    random= `"When you can't control what's happening, challenge yourself to control the way you respond to what's happening. That's where your power is." — Unknown`
    break;
    case 6:
    random =  `"Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit." — Napoleon Hill` 
    break;
    case 7:
    random= `"Happiness is not the absence of problems, it's the ability to deal with them." — Steve Maraboli`
    break;
    case 8:
    random =  `"You must make a decision that you are going to move on. It won't happen automatically. You will have to rise up and say, 'I don't care how hard this is, I don't care how disappointed I am, I'm not going to let this get the best of me. I'm moving on with my life.'" — Joel Osteen`
    break;
    case 9:
    random =  `"I can be changed by what happens to me. But I refuse to be reduced by it." — Maya Angelou`
    break;
    case 10 :
      random = `"In the midst of chaos, there is also opportunity." — Sun Tzu`
    
}
var newQouteBtn = document.getElementById("result");
newQouteBtn.innerHTML = `<h5>${random}</h5>`;
}



