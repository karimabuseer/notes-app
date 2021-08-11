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
    for (displayNotes in ) //iterating for notes
    document.getElementById("Juju").innerHTML = "Hi";
  });
  
});
