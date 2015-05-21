/* PhonePriceCalc.js */
$(document).ready(function(){    
    
    // This function recalculates the sum of the prices in the array:
    function recalculateTotalPrice(array) {
        var tot = 1000; // Base Price
        var x;
        for (x in array) {
            tot += array[x];
        }
        document.getElementById("totalPrice").innerHTML = "Total: " + tot + " &#8364;"; 
    };
    
    var price = {
        BackCover:0, 
        InterlaceBase:0,
        Heart:0
    };
    
    // Get the elements from the forms
    var BackCoverSelect = document.getElementById("BackCover");
    var InterlaceBaseSelect = document.getElementById("InterlaceBase");
    var HeartSelect2 = document.getElementById("Heart2");
    
    // EVENT LISTENERS, functions called when there is a change of selection:
    // BACK COVER:
    // ***********
    BackCoverSelect.addEventListener("change", function() {
        price.BackCover = parseInt(BackCoverSelect.options[BackCoverSelect.selectedIndex].value);
        recalculateTotalPrice(price);
        document.getElementById("BackCoverPrice").innerHTML = " " + price.BackCover + " &#8364;";
        
        // Update the current color of the the Back cover:
        addImage(BackCoverSelect.options[BackCoverSelect.selectedIndex].innerHTML, 17, 211);
        // Set BackCoverLeather value to the new leather value:
        BackCoverLeather = BackCoverSelect.options[BackCoverSelect.selectedIndex].innerHTML;
    }); // End of BackCoverSelect event listener
    
    // INTERLACE BASE:
    // ***************
    InterlaceBaseSelect.addEventListener("change", function() {
        price.InterlaceBase = parseInt(InterlaceBaseSelect.options[InterlaceBaseSelect.selectedIndex].value);
        recalculateTotalPrice(price);
        document.getElementById("InterlaceBasePrice").innerHTML = " " + price.InterlaceBase + " &#8364;"; 
        
        // PHONE COLOR:
        changeColor(InterlaceBaseColor, InterlaceBaseSelect.options[InterlaceBaseSelect.selectedIndex].innerHTML, imageData.data);

        // Set InterlaceBaseColor value to the new color
        InterlaceBaseColor =  InterlaceBaseSelect.options[InterlaceBaseSelect.selectedIndex].innerHTML;
    }); // End of InterlaceBaseSelect event listener

    // HEART:
    // ******
    document.getElementById("myBtn").addEventListener("click", function(evt) {
        evt.preventDefault();  // Stop the form from reloading the page 

        document.getElementById("HeartColorError").innerHTML = "";

        switch (HeartSelect2.value) {
            case "Rubies": 
                price.Heart = 188;
                recalculateTotalPrice(price);
                document.getElementById("HeartPrice").innerHTML = " " + price.Heart + " &#8364;";

                // PHONE COLOR:
                changeColor(HeartColor, "Rubies", imageData.data);

                // Set HeartColor value to the new color
                HeartColor = "Rubies";                
            break;

            case "Blue ceramic": 
                price.Heart = 1256;
                recalculateTotalPrice(price);
                document.getElementById("HeartPrice").innerHTML = " " + price.Heart + " &#8364;";

                // PHONE COLOR:
                changeColor(HeartColor, "Blue ceramic", imageData.data);

                // Set HeartColor value to the new color
                HeartColor = "Blue ceramic";                
            break;
            
            default: 
                document.getElementById("HeartColorError").innerHTML = "Wrong heart color!";

        } // end of Switch
        return false;
    });
    
}); // End of $(document).ready()