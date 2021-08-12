document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("bigManButton");
  let list = document.getElementById("notesList");
  const displayNotes = new DisplayNotes();
  const storeNotes = new StoreNotes();


  button.addEventListener("click", (event) => {
    event.preventDefault()
    let userInput = document.getElementById("writing").value;
    storeNotes.createNote(userInput);
    let allNotes = displayNotes.displayAll();
    const newDiv = document.createElement("div");
    const dummyText = document.createTextNode("Test");
    newDiv.appendChild(dummyText);
    newDiv.classList.add("note");
    const currentDiv = document.getElementById("last");
    list.appendChild(newDiv);
    
    // list.innerHTML = allNotes;
  });
  
});
