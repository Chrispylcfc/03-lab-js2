(function(){

  let myName = document.getElementById("my-name");
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name");
  let clear = document.getElementById("clear-button");
  let nameStored = localStorage.name;

  // Displays the name in the console at this stage:
  console.log(`Name on page load: ${nameStored}`);

  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    // Gets the name the user entered:
    nameStored = userName.value;

    // Shows the name in "my-name":
    myName.innerHTML = nameStored;

    // Puts the name into localStorage:
    localStorage.name = nameStored;

    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
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
