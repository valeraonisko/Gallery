const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

function clickListener(event) {
  event.preventDefault();
  const target = event.target;
  const aTarget = target.closest('a');
  largeImg.src = aTarget.href;
  largeImg.alt = aTarget.title;
}

thumbs.addEventListener ('click', clickListener, true);

//  предзагр больших картинок
// var largeImages = thumbs.getElementsByTagName('img');
// for (let i = 0; i < largeImages.length; i++) {
//   let src = largeImages[i].parentNode.href;
//   let hiddenLargeImg = document.createElement('img');
//   hiddenLargeImg.src = src;
//   console.log(src);
// }
