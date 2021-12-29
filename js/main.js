//Variable declaration
const customName = document.querySelector('#customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


var storyText="It was 94 fahrenheit outside,so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments,  then :insertz:.Bob saw the whole thing, but was not surprised  :insertx: weighs 300 pounds,  and it was a hot day.";

var insertX=["Willy the Goblin", "Big Daddy", "Father Christmas"];

var insertY=["the soup kitchen", "Disneyland" ,"the White House"];

var insertZ=["spontaneously combusted", "melted into a puddle on the sidewalk",
"turned into a slug and crawled away"];



randomize.addEventListener('click', result);

function result() {
//will create a new random story each time the button is clicked
var newStory=storyText;

var xItem=randomValueFromArray(insertX);
var xItem=randomValueFromArray(insertX);
var yItem=randomValueFromArray(insertY);
var zItem=randomValueFromArray(insertZ);

//Placeholder replacement with strings
var newStory=newStory.replace(':insertx:', xItem);
var newStory=newStory.replace(':insertx:', xItem);
var newStory=newStory.replace(':inserty:', yItem);
var newStory=newStory.replace(':insertz:', zItem);




//replaces the name Bob with the custom name
  if(customName.value != "") {
    let name = customName.value;
	newStory=newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0714286)+'stone';
    let temperature =  Math.round((94-32)*(5/9))+'centigrade';

    var newStory=newStory.replace('300 pounds', weight);
	
	
  }

  story.textContent =newStory ;
  story.style.visibility = 'visible';
  story.style.backgroundColor='yellow';
}//end of result function


