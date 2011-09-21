less.env = "development";
less.watch();

function addNoise(canvas) {
    var ctx = canvas.getContext('2d');

    // get canvas pixels
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imageData.data;

    for (var i = 0, il = pixels.length; i < il; i += 4) {
        // var color = Math.round(Math.random() * 255);
        var M = 90;
        var N = 110;
        var color = Math.floor(M + (1 + N - M) * Math.random());

        // because the noise is monochromatic,
        // we should put the same value in the R, G and B channels
        pixels[i] = pixels[i + 1] = pixels[i + 2] = color;

        // make sure pixels are opaque
        pixels[i + 3] = 255;
    }

    // put pixels back into canvas
    ctx.putImageData(imageData, 0, 0);
}

$(document).ready(function () {
  // set up canvas
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = 100;
  $("body").append(canvas);
  addNoise(canvas);
  canvas_url = canvas.toDataURL("image/png");
  console.log(canvas_url);

  $("body").css("background", "url(" + canvas_url + ")");
});
