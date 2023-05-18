var images = [
    'pixel-art.gif',
    'beach-summer.gif',
    'pixel-art-water.gif',
    'naruto-background.gif',
    'moutian-pixel.gif',
  ];
  
  function getRandomImage() {
    var index = Math.floor(Math.random() * images.length);
    return images[index];
  }
  
  window.onload = function() {
    var randomImage = getRandomImage();
    document.body.style.backgroundImage = 'url(' + randomImage + ')';
    document.body.style.backgroundSize = 'cover';
  };
  