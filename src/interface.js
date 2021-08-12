document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("bigManButton");
  let list = document.getElementById("notesList");
  const displayNotes = new DisplayNotes();
  const storeNotes = new StoreNotes();
  loadNotes();


  button.addEventListener("click", (event) => {
    event.preventDefault()
    let userInput = document.getElementById("writing").value;
    storeNotes.createNote(userInput);
    newNote(userInput);
  });
  
  function newDiv (val) { 
    const newDiv = document.createElement("div");
    newDiv.classList.add("note");
    newDiv.innerHTML = val;
    list.appendChild(newDiv);
  };

  function newNote (userInput) { 
    newDiv(userInput);
  };

  function loadNotes () { 
    let allNotes = displayNotes.displayAll();
    for (let i = 0; i < allNotes.length; i++) { 
      newDiv(allNotes[i]);
    }
  };
  
});
