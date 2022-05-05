// question 1
const menuIsOpen = false;

if (menuIsOpen) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}



// question 2
// const url = "https://api.rawg.io/api/games?platforms=4&genres=action&publishers=354";
// platform is a parameter with a value of 4
// genres is a parameter with a value of action
// publishers is a parameter with a value of 354


// question 3 - function getCatFacts
const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

async function getCatFacts() {
  // fetch
  const response = await fetch(url);

  const result = await response.json();
  console.log(response);
  console.log(result.length);
}

getCatFacts();
