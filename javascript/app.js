//Pseudocode -- Homework Week 6 -- GifTastic

//Instructions

//GOAL// The app should take the topics in an array and create buttons in the HTML.

//Create an array with topics saved under var topics

//*//Consult Activity Week 6:7 //*//

//Create a function, inside of that function create a loop that appends a 
    //button for each string in the array. 

//*//Consult Activity Week 6:7 lines 46-60 //*// 

//GOAL// When the user clicks on a button, the page should grab 10 static, 
    //non-animated gif images from the GIPHY API and place them on the page.

//*//Consult Activity Week 6:13 //*//

//Create an onclick function

//Create a var queryURL https://.... + topics + apikey… + limit 10. 
    //Topics is the variable. Consult the GIPHY website to see how the url should look.

//Within the onclick function, create an ajax call. 

//*//Consult 6:13 lines 61-86 //*//

//Then, still within the onclick function, create a for loop that will grab the gifs. 

//In the for loop, dynamically create the div that the gif and rating will be in

//In the for loop, create a variable to house the gif rating 

//In the for loop, create a variable to house the rating and then within that same line of code, 
    //add the rating with .text

//In the for loop, create a variable to house the gif and dynamically create <img>s to house the gif. 

//dynamically add to each image the class attribute of gif. 
    //*This will help later with the animated gif function.

//dynamically add to each image the data-state attribute of still. 
    //*This will help later with the animated gif function.

// use .attr to change the src attribute to the still image of the gif. 
    //In the GIPHY Json there is an a way access the still image going thru the object tree. 

//Append both the these to the div

//Write the div onto the html 

//GOAL// When the user clicks one of the still GIPHY images, the gif should animate. 
    //If the user clicks the gif again, it should stop playing. 

//*//Consult Activity Week 6:15//*//

//create another onclick function that selects everything with the .gif class.


//Within that onclick function, create a variable called state. 
    //var state = $(this).attr("data-state"); This will add the data state of the 
    //gif to the variable so that it is easier to switch it. 

//Within that onclick function create an if or else statement similar to lines 21-26 in that activity. 
    //This will switch. However, since the links are not provided in the js or html documents 
    //but thru ajax, the code is different. Instead of $(this).attr("data-animate"), 
    //reference the place in the object tree for the appropriate gif state. 

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

