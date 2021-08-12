document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("bigManButton");
  let list = document.getElementById("notesList");
  const displayNotes = new DisplayNotes();
  const storeNotes = new StoreNotes();
  updateDisplay();


  button.addEventListener("click", (event) => {
    event.preventDefault()
    let allNotes = displayNotes.displayAll();
    let userInput = document.getElementById("writing").value;
    storeNotes.createNote(userInput);
    newNote(userInput);
  });

  function updateDisplay () {
    console.log(localStorage)
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const newDiv = document.createElement("div");
      const dummyText = document.createTextNode(value);
      newDiv.appendChild(dummyText);
      newDiv.classList.add("note");
      list.appendChild(newDiv);
    }
  }

  function newNote (userInput) { 
    const newDiv = document.createElement("div");
    const dummyText = document.createTextNode(userInput);
    newDiv.appendChild(dummyText);
    newDiv.classList.add("note");
    list.appendChild(newDiv);
  }
  
});
