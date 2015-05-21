// Global variables = current colors of the different parts:
var BackCoverLeather = "Ostrich";
var InterlaceBaseColor = "Yellow gold";
var HeartColor = "Blue ceramic";
var imageData;

// This function converts a colorName to the (r, g, b, a) array:
function defineColor(colorName) {
    switch(colorName) {
    case "Rose gold":
            return [255, 228, 225, 250];
    case "Yellow gold":
            return [255,200,15, 250];
    case "Blue ceramic":
            return [150, 180, 255, 255];
    case "Rubies":
            return [220, 20, 60, 250];
    default:
            return [0, 0, 0, 0];    // black
    } // end of switch
}  // end of defineColor

// ************************************************************
// changeColor() function: Browse through the image pixels to 
// change any "color1 pixel" to a "color2 pixel":
// ************************************************************
function changeColor(currentColor, newColor, original){
    // Convert the color names to teh rgba array:
    color1 = defineColor(currentColor);
    color2 = defineColor(newColor);

    //i is indexing on the rgba array 
    // red (i=0), green (i=1), blue (i=2), alpha (i=3)
    var i = 0;
    var cont = 1;
        
    //Browse the array of pixels to change the color.
    // Only need a subset of pixels since the Interlace and 
    // Heart are at the top of the phone.
    for (key=900; key<=18500; key++) {
        key = parseInt(key);
        if (cont == 1) {
            if ((original[key] == color1[0]) && 
                (original[key+1] == color1[1]) && 
                (original[key+2] == color1[2])) {
                    cont = 0;
                    original[key] = color2[0];
                    original[key+1] = color2[1];
                    original[key+2] = color2[2];
                    original[key+3] = color2[3];
            }
        } // end if cont==1
        else { // cont is 0, we wait for key to be incremented by 4
            i++;
            if (i == 3) {
                i = 0; // Start loop on i index again */
                cont = 1;
            }
        }
    } // End of for loop
    
    // Now draw the new image data on the canvas
    context.putImageData(imageData, 0, 0);
    // The image has been overwritten, so need to add it on top again:
    addImage(BackCoverLeather, 17, 211);
    
} // End of changeColor()

// ************************************************************
// The back cover of the phone is made of leather.
// The following function positions an image (of leather) 
// on the canvas.
// ************************************************************
// First this function adds an image to the canvas at a given position:
function addImage(imageName, xPos, yPos) {
    // Create a Javascript Image object and set its source URL 
    // to the location of the image file to process.
    var backCoverImage = new Image();
    backCoverImage.src = "images/" + imageName + ".bmp";
    backCoverImage.crossorigin = "anonymous";

    // Need a pause for the image to show!? - Not sure why...
    setTimeout(continueExecution, 20);
    function continueExecution()
    {
        context.drawImage(backCoverImage, xPos, yPos);
    }

} // End of addImage()

/*  Grab the canvas elements and the graphics context here */
var canvas = document.getElementById('myCanvas');

//set the canvas size
canvas.width = 127;
canvas.height = 246;

// Make an image context for the canvas:
var context = canvas.getContext('2d');

// Create a Javascript Image object and set its source URL 
// to the location of the image file we'll to process.
var image_obj = new Image();
image_obj.src = "images/Phone2.bmp";
image_obj.crossorigin = "anonymous";
image_obj.crossOrigin = "anonymous";

// Handler that loads when the image has finished downloading.
image_obj.onload = function(){
    // Draw the image in the canvas window:
    context.drawImage(this, 0, 0);
    // The image has been overwritten - need to add the leather image on top again:
    addImage(BackCoverLeather, 17, 211);

    // Grab the ImageData object from the graphics context. This contains a 'bitmap' of every pixel in the image
    imageData = context.getImageData(0, 0, canvas.width, canvas.height);
}; //end image_obj.onload function