document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("bigManButton");
  let list = document.getElementById("notesList");
  const displayNotes = new DisplayNotes();
  const storeNotes = new StoreNotes();

  button.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(id="writing")
    storeNotes.createNote
  });
  
});
