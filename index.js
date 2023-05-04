let DOBOpen = false;
let DateBirth;
const settingCog1 = document.getElementById("settingIcon");
const settingContent1 = document.getElementById("settingContent");
const front1 = document.getElementById("front");
const after1 = document.getElementById("after");
const dobBtn1 = document.getElementById("dobBtn");
const dobInput1 = document.getElementById("dobInput");

const year1 = document.getElementById("year");

const twoDigit = (number) =>{
  return number > 9 ? number :`0${(number)}`;
}

const toggleDateOfBirth = () =>{
  if(DOBOpen){
    settingContent1.classList.add("hide");
  }
  else{
    settingContent1.classList.remove("hide");
  }
  DOBOpen = !false;
  console.log("Toggle", DOBOpen);
}

const updateAge = () =>{
  const currentDate = new Date();
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff/ (1000 * 60 * 60 * 24 * 365));
 
  year1.innerHTML = twoDigit(year);
}

const setDOBHandler = () =>{
 const dateString = dobInput1.value;

 dateOfBirth = dateString ?  new Date(dateString) : null;


 if(dateOfBirth){
    front1.classList.add("hide");
    after1.classList.remove("hide");
    setInterval(() => updateAge(),1000);
 }
 else{
    after1.classList.add("hide");
    front1.classList.remove("hide");
 }
}

setDOBHandler();

settingCog1.addEventListener("click", toggleDateOfBirth);
dobBtn1.addEventListener("click", setDOBHandler);

