# GifTastic

Giftastic is an application that dynamically creates buttons from either an array or a user's input. These buttons then pull gifs from GIPHY API.

In addition, the gifs begin still and but then after clicking on them, they animate.

## Technologies Used
* Javascript
* jQuery
* GIPHY API
## Prerequisites
* None

## Challenges 
The use of data-* attributes is essential to the get the application to work. Initially, I attempted to store data from the API into variable and then switch. However, this didn't work.
```dogImage.attr("data-state", "still")

                        dogImage.attr("data-still", results[i].images.original_still.url)
                        dogImage.attr("data-animate", results[i].images.original.url)
```

With the click function, the state switches and with it the gif images, whether moving or still depending on it's initial state. 

```  if (state === "still") {
                            //this will swtitch the still url to the moving url 
                            // $(this).attr("src", movingGif);
                            $(this).attr("src", $(this).attr("data-animate"))
                            //this will switch the data state from still to animate
                            $(this).attr("data-state", "animate");
                        } else {
                            //this will switch the moving url to the still
                            $(this).attr("src", $(this).attr("data-still"));

                            //this will switch the data state from animate to still
                            $(this).attr("data-state", "still");
                        }
```
