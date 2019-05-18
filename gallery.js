let largeImg = document.getElementById('largeImg');
let thumbs = document.getElementById('thumbs');
thumbs.onclick = function(event) {
  console.log('click');
  let target = event.target;
  while (target != this) {
    if (target.nodeName == 'A') {
      largeImg.src = target.href;
      return false;
    }
    target = target.parentNode;
  }
}
//  предзагр больших картинок
// var largeImages = thumbs.getElementsByTagName('img');
// for (let i = 0; i < largeImages.length; i++) {
//   let src = largeImages[i].parentNode.href;
//   let hiddenLargeImg = document.createElement('img');
//   hiddenLargeImg.src = src;
//   console.log(src);
// }
