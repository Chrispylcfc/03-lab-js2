(function(){

  let myName = document.getElementById("my-name");
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name");
  let familyName = document.getElementById("family-name");
  let colour = document.getElementById("colour");
  let bgColor = document.getElementById("bg-color");
  let clear = document.getElementById("clear-button");
  let nameStored = localStorage.name;
  let colourStored = localStorage.color;

  // Displays the name in the console at this stage:
  console.log(`Name on page load: ${nameStored}`);
  console.log(`Colour on page load: ${colourStored}`);

  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    bgColor.style.color = colourStored;
    console.log(`Name stored is: ${nameStored}`);
    console.log(`Colour stored is: ${colourStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name & colour stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    // Gets the name the user entered:
    nameStored = userName.value + " " + familyName.value;
    colourStored = colour.value;

    // Shows the name in "my-name":
    myName.innerHTML = nameStored;
    bgColor.style.color = colourStored;

    // Puts the name into localStorage:
    localStorage.name = nameStored;
    localStorage.color = colourStored;

    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
    console.log(`New colour stored: ${colourStored}`);
    event.preventDefault();
    return false;
  }

  function ClearStorage() {
    if(nameStored) {
      console.log(`Cleared Local Storage`);
      localStorage.clear();
      location.reload();
    }
  }

  getName.addEventListener("reset", ClearStorage);
  getName.addEventListener("submit", PerformGreeting);

}());
