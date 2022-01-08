
// Add <p> red text "Hey I"m red!"
const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm red!";

container.appendChild(redText);

// Add blue h3

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm blue h3!";

container.appendChild(blueH3);

// Add a div witth a black border and pink background color
// Add h1 that says "I'm in a div"
// Add a "p" that says "ME TOO!"

const exerciseDiv = document.createElement("div");
const exerciseH1 = document.createElement("h1");
const exerciseP = document.createElement("p");

exerciseDiv.style.backgroundColor = "pink";
exerciseDiv.style.border = "1px solid black";

exerciseH1.textContent = "I'm in a div";
exerciseP.textContent = "ME TOO!";

exerciseDiv.appendChild(exerciseH1);
exerciseDiv.appendChild(exerciseP);
container.appendChild(exerciseDiv);

// Add event listener to a button
//HTML : <button id="btn">Click Me Too</button>

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener("click", function(e) {
    e.target.style.background = "blue";
    e.target.style.color = "white";
});