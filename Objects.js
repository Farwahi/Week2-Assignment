const person = {
    name: 'Syeda',
    age: 43,
    favoriteSongs: ['Al-Kausar', 'Al-Falaq', 'Al-Fatihah'],
    sayHello: function() {
      const consoleOutput = `Hello, my name is ${this.name}, I am ${this.age} years old and my favorite songs are ${this.favoriteSongs}.`;
      console.log(consoleOutput);
      document.getElementById('console-output').textContent = consoleOutput;
    }
  };
  
  person.sayHello();
  
var audio = document.getElementById("my-audio");

function playAudio(filename) {
  audio.src = filename;
  audio.play();
}
// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const song1 = document.getElementById('song1').value;
  const song2 = document.getElementById('song2').value;
  const song3 = document.getElementById('song3').value;

  // Log the form data to the console
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Favorite Song 1: ${song1}`);
  console.log(`Favorite Song 2: ${song2}`);
  console.log(`Favorite Song 3: ${song3}`);

  // Show an alert with the console message
  alert(`Hello, my name is Syeda, I am 43 years old and my favorite songs areAl-Kausar', 'Al-Falaq', 'Al-Fatihah.`);
});