const containerElement=document.querySelector(".container");
const careers = [ "Changing my mind is a strength, not a weakness.",
    "Every decision I make is supported by my whole and inarguable experience.",
    "I affirm and encourage others, as I do myself.",
    "I alone hold the truth of who I am.",
   "I alone hold the trust of who I am.", 
    "I am allowed to ask for what I want and what I need.",
    "I am allowed to feel good.",
    "I am capable of balancing ease and effort in my life.",
    "I am complete as I am, others simply support me.",
    "I am content and free from pain.",
    "I am doing the work that works for me.",
    "I am good and getting better.",
    "I am growing and I am going at my own pace.",
    "I am held and supported by those who love me.",
    "I am in charge of how I feel and I choose to feel happy.",
    "I am listening and open to the messages the universe has to offer today.",
    "I am loved and worthy.",
    "I am more than my circumstances dictate.",
    "I am open to healing.",
   "I am optimistic because today is a new day."];
let careersIndex= 0;
let characterIndex=0;

updateText();


function updateText(){
    characterIndex++
    containerElement.innerHTML= `<h1>  ${careers[careersIndex].slice(0,characterIndex)}</h1>`;
   if(characterIndex===careers[careersIndex].length){
    careersIndex++
    characterIndex=0
   }
   if(careersIndex===careers.length){
    careersIndex=0;
   }
    setTimeout(updateText, 200);
}


