if(2+2 === 6){

    console.log("Math works!");

  } else {

    console.log("Math is broken.")

  }
  
  // Expected output: "Math works!"



  myName = "Autumn"

  if (myName === "Jacob"){
      
    console.log("Hi Two Stackzzz");

} else if (myName === "Walker"){
    console.log("Hi Walker the Great!")
} else {
    console.log ("Hi, person with no face");
}

//In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false. If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.


var likesTravel = true;

if(likesTravel === true){

 console.log("Bon Voyage!");

} else {

 console.log("Enjoy your couch!.");

}

var favoriteFood = "Sushi";

if(favoriteFood === "Fried Pickles" || "Pepperoni rolls"){console.log("Congratulations! You have great taste!")}

else {console.log("Clearly you have not tried Fried pickles or Pepporoni Rolls")}


if(1+1 >5){
    console.log("True Fact!");
  } else {
    console.log("LIES!")
  }

  if(4*5 >= 20){
    console.log("True Facts!");
  } else {
    console.log("LIES!")
  }

  if(6-2 >= 0){
    console.log("True Facts!");
  } else {
    console.log("LIES!")
  }


  var likesDogs = true;
  if(likesDogs === true){
      console.log("You're a dog person!")
  } else{
      console.log("You're a cat person!")
  }

  var birthYear = 1993;

  if(birthYear >= 1977 && birthYear <= 1994){

    console.log("You're part of Generation Y")
  } else if(birthYear >= 2012 &&  birthYear <= 1995){

    console.log("You're part of Generation Z")
  }


  


  var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard"];

  var i = 0; 
  
  while(i < moviesArray.length){
    console.log(moviesArray[i]);
    i++;
  }



  for(var i = 0; i < moviesArray.length; i++){
    console.log(moviesArray[i]);
  }


  for(var i = 0; i < moviesArray.length; i++){
    console.log("Tweet Tweet Tweet!");
  }


  var favoriteFoodsArray = ["Tacos","Pizza", "Ribs", "Mochi","Grilled Cheese"]

  for(var i = 0; i < favoriteFoodsArray.length; i++){
    console.log(favoriteFoodsArray[i]);
  }

  var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]


  for(var i = 0; i < cohortOneStudents; i++){
    console.log(cohortOneStudents[i]);
  }


  var interestsArray = ["Painting", "Reading", "Gaming", "Sporting", "Sky Watching"]

  for(var i = 0; i < interestsArray.lenghth; i++){

    console.log(`One of my interests is: ${interestsArray[i]}`);
  }
