This project started when, hearing about the Final Project requirements, I was asked to create a price calculator for a luxury phone brand
- my husband works for that company - I've changed the prices, and if you wonder, in reality, they are insanely much higher ;)

On the first page PhonePriceCalc.html:
--------------------------------------
The user chooses 3 features (2 pull down and I changed one to a text for the exercise) of the phone and two things happen:
1. The price of that feature/color is displayed 
2. The total price is updated.
3. If it's a color, the color on the phone picture/canvas is changed.
4. If it's the "Backcover", which is normally leather, an image is added to the canvas.
5. The text box with a Submit button controls the entry and displays an error message.

Some of the challenges encountered:
-----------------------------------
The challenge I had at first was to get a clean image of the phone. It took some time to clear up the noise.
I struggled for a long time because the jpg format slightly changed the colors of some pixels... 
Until I finally used .bmp format which does not alter the pixel colors.

The image does not always appear on the canvas. But if I put a stop in the debugger on that line, then it works. 
So I ended up putting a short timer to wait a bit before displaying the leather image on the canvas, and it seems to work.

The other problem I had was with the " Cross-Origin Resource Sharing policy" when loading my picture. 
But after I set "crossorigin" to "anonymous",  I was able to work using another browser.