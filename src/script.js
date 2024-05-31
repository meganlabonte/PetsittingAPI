//Adding emojis to h1 using JavaScript
//create new paragraph
let paragraph = document.createElement('p');
//content of paragraph
megsPaws.textContent = "🐾 Meg's Paws 🐾";
//appending the title to the boy
document.body.appendChild(paragraph);

//Pricing Checklist
//Changing checkbox title with JavaScript
document.getElementById("petInput").textContent = "Please select your pet type for petsit pricing:";

//function to display pricing through an alert
function petSelection() {
    var pet1 = document.getElementById('pet1');
    var pet2 = document.getElementById('pet2');
    var pet3 = document.getElementById('pet3');
  //message variable needed in case customer has multiple pets. It will enable multiple messages in one alert
    var message = "";

  //using boolean values and if else
    if (pet1.checked) {
        message += "Dogs cost $10 per night. 🐕\n";
    }
    if (pet2.checked) {
        message += "Cats cost $8 per night. 🐈\n";
    }
    if (pet3.checked) {
        message += "Hamsters cost $6 per night. 🐹\n";
    }
  //checks if user has checked a box or not
    if (message === "") {
        message = "Please select pet type.";
    }

    alert(message);
}

//Pet Name Generator 
//array - data structure - to hold pet names
const petNameList = [
  "Gerald",
  "Spike",
  "Fluffy",
  "Feta",
  "Luna",
  "Basil",
  "Missy",
  "Poppy",
  "Barney",
  "Buddy",
  "Charlie",
  "Caspian",
  "Cici",
  "Pez",
  "Titus"
];

// Function to generate random pet names. The numberOfNames parameter specifies how many random names to generate. names array used to store the randomly picked names
function getRandomPetNames(numberOfNames) {
  let names = [];
  
  //using for loop within function to iterate through the names array. Using math.floor to convert random number into an integer. Push adds the name to the names array
  for (let i = 0; i < numberOfNames; i++) {
    const randomIndex = Math.floor(Math.random() * petNameList.length);
    names.push(petNameList[randomIndex]);
  }

  //returns random names
  return names;
}

// pet name generator function to display the names
function petNameGenerator() {
  const numberOfNames = 3; // Specify how many names you want to generate
  const randomNames = getRandomPetNames(numberOfNames);

  // Display the random names. Orginally I used an alert however this interfered with my pet type checklist. 
  const outputElement = document.getElementById('petNamesOutput');
  outputElement.textContent = "Your random pet names are: " + randomNames.join(', ');
  
  //console.log to display pet name message as required by the assignement 
  console.log(randomNames);
}

//onmouseover event for buttons. This event occurs when the mouse pointer enters an element. It also triggers a change to the website as per assignement requirement. 
function mouseOver(x) {
  x.style.color = "lightblue";
}

//onmouseout event for buttons. This event occurs when the mouse pointer leaves the element.
function mouseNotOver(x) {
  x.style.color = "white";
}

//timed alert
function showAlert() {
      alert("🦮🐹 Please consider leaving a review! 🐰🐈");
}

// Set interval to show the alert every 120000 milliseconds (2 mins)
setInterval(showAlert, 120000);


