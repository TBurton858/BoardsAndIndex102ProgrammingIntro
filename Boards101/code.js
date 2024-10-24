var intervalID = 0

//Will move image
function moveImage()
{
    var image = document.getElementById("memeImage");

    var oldX = 0;
    var oldY = 0;

    //keeping track of the intervalID will allow us to stop moving the image
    intervalID = setInterval
    (
        function()
        {
            //set the x and y coordinates for the image
            var newX = 5; //moving image by this amount in pixels
            var newY = 5; //moving image by this amount in pixels

            //oldX += newX is oldX + newX = oldX
            oldX += newX;
            oldY += newY;

            console.log("oldX = " + oldX);
            console.log("oldY = " + oldY);

            image.style.left = oldX + "px";
            image.style.top = oldY + "px";
        },
        1000// 1 second (1000 miliseconds = 1 second)
    )
}

//Will stop image
function stopImage()
{
    //Clear interval
    clearInterval(intervalID);
}