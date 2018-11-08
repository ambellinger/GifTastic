//Pseudocode -- Homework Week 6 -- GifTastic

//Instructions

//GOAL// The app should take the topics in an array and create buttons in the HTML.

//Create an array with topics saved under var topics
var topics = ["corgi",
    //"german sherpherd",
    "pomeranian",
    "pug",]
//"bernese mountain dog",
//"shih tzu",
//"australian shepherd",
//"border collie",
//"pit bull",
//"labrador retriever"]

var dogs;


//*//Consult Activity Week 6:7 //*//

//Create a function, inside of that function create a loop that appends a 
//button for each string in the array. 
function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons").empty();

    for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generate buttons for each topic in the array.
        var a = $("<button>");
        // Adding a class
        a.addClass("dog");
        // Adding a data-attribute with a value of the topic at index i
        a.attr("data-name", topics[i]);
        // Providing the button's text with a value of the topic at index i
        a.text(topics[i]);
        // Adding the button to the HTML
        $("#buttons").append(a);
    }


    //*//Consult Activity Week 6:7 lines 46-60 //*// 

    //GOAL// When the user clicks on a button, the page should grab 10 static, 
    //non-animated gif images from the GIPHY API and place them on the page.

    //*//Consult Activity Week 6:13 //*//

    //Create an onclick function
    $(".dog").on("click", function () {
        $("#dog-gifs-appear-here").empty();
        alert("you've clicked");

        //try pushing the onclick thing into a variable here so that it searches only that
        // exact topic

        var dog = $(this).attr("data-name");

        //Create a var queryURL https://.... + topics + apikey… + limit 10. 
        //Topics is the variable. Consult the GIPHY website to see how the url should look.

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + dog +
            "&api_key=vfa87WI4IKhmgkTU4a7pwucCE1jM2kx6&limit=10";
        console.log(queryURL);

        //Within the onclick function, create an ajax call. 
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                // Storing an array of results in the results variable
                var results = response.data;


                //Then, still within the onclick function, create a for loop that will grab the gifs. 
                for (var i = 0; i < results.length; i++) {
                    console.log(queryURL);

                    //In the for loop, dynamically create the div that the gif and rating will be in
                    var gifDiv = $("<div>");

                    //In the for loop, create a variable to house the gif rating 
                    var rating = results[i].rating;

                    //In the for loop, create a variable to house the rating and then within that same line of code, 
                    //add the rating with .text
                    var p = $("<p>").text("Rating: " + rating);

                    //In the for loop, create a variable to house the gif and dynamically create <img>s to house the gif. 
                    var dogImage = $("<img>");

                    //dynamically add to each image the class attribute of gif. 
                    //*This will help later with the animated gif function.
                    dogImage.addClass("doggy");

                    //dynamically add to each image the data-state attribute of still. 
                    //*This will help later with the animated gif function.
                    dogImage.attr("data-state", "still")

                    // use .attr to change the src attribute to the still image of the gif. 
                    //In the GIPHY Json there is an a way access the still image going thru the object tree. 

                    dogImage.attr("src", results[i].images.original_still.url);

                    //Append both the these to the div
                    gifDiv.append(p);
                    gifDiv.append(dogImage);


                    //Write the div onto the html 
                    $("#dog-gifs-appear-here").prepend(gifDiv);

                }

                //GOAL// When the user clicks one of the still GIPHY images, the gif should animate. 
                //If the user clicks the gif again, it should stop playing. 

                //create another onclick function that selects everything with the .doggy class.
                $(".doggy").on("click", function () {

                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    })

                        .then(function (response) {
                            var results = response.data;
                            //Within that onclick function, create a variable called state. 
                            //var state = $(this).attr("data-state"); This will add the data state of the 
                            //gif to the variable so that it is easier to switch it. 
                            var state = $(dogImage).attr("data-state");

                            //Create a for loop so that the index or i is referencing that right bject.
                            for (var i = 0; i < results.length; i++) {
                                //save the urls to variable to make it easier to reference it later 
                                ////reference the place in the object tree for the appropriate gif state's.url    
                                var movingGif = results[i].images.original.url;
                                var stillGif = results[i].images.original_still.url;
                            }
                            // If else statement will animate the gif by switching states.

                            if (state === "still") {
                                //this will swtitch the still url to the moving url 
                                $(dogImage).attr("src", movingGif);
                                //this will switch the data state from still to animate
                                $(dogImage).attr("data-state", "animate");
                            } else {
                                //this will switch the moving url to the still
                                $(dogImage).attr("src", stillGif);
                                //this will switch the data state from animate to still
                                $(dogImage).attr("data-state", "still");
                            }

                        })

                });

            });


    });




}

//*//Only once you get images displaying with button presses should you move on to the next step. //*//

//GOAL// Add a form to the page takes the value from a user input box and adds it 
//into the topics array. Then make a function call that takes each topic in 
//the array remakes the buttons on the page.

//*//Consult Activity Week 6:10 //*//

//Make sure you add a form to your html document.

//Create an onclick function that interacts with the form button

//add this   event.preventDefault(); (?? Not sure why)

//Recall your variable var topics and push the input into it. 

//Call the button making function
renderButtons()

