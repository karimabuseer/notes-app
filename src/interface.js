document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("bigManButton");
  let list = document.getElementById("notesList");
  let input = document.getElementById("writing")
  const displayNotes = new DisplayNotes();
  const storeNotes = new StoreNotes();
  const emoji = new Emoji();
  loadNotes();

  button.addEventListener('click', () => {
    event.preventDefault()
    let userInput = document.getElementById("writing").value;
      emoji.convertEmoji(userInput)
      .then(data => {
        storeNotes.createNote(data);
        location.reload();
      });
  });

  function newDiv (val) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("note");
    newDiv.innerHTML = val;
    list.appendChild(newDiv);
  };

  function loadNotes () {
    let allNotes = displayNotes.displayAll();
    for (let i = 0; i < allNotes.length; i++) {
      newDiv(allNotes[i]);
    }
  };

  function removeElementsByClass () {
    const elements = document.getElementsByClassName("note");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

  // Showing a single note
  window.addEventListener("hashchange", () => {
    console.log('Page has changed');
    let key = window.location.hash.split("#")[1]
    showSingleNote(displayNotes.selectNote(key))
  });

  function showSingleNote (longNote) {
    document.getElementById("writing").hidden = true;
    button.hidden = true;
    const noteDivWrapper =  document.getElementById("single-note-wrapper");
    const noteDiv =  document.getElementById("single-note");
    const backButton =  document.getElementById("back-to-notes");
    const deleteButton =  document.getElementById("delete-note");
    noteDivWrapper.hidden = false;
    noteDiv.innerHTML = longNote;

    backButton.addEventListener("click", () => {
      noteDiv.innerHTML = "";
      noteDivWrapper.hidden = true;
      document.getElementById("writing").hidden = false;
      button.hidden = false;
    });

    deleteButton.addEventListener("click", () => {
      storeNotes.deleteNote();
      removeElementsByClass();
      loadNotes();
      noteDivWrapper.hidden = true;
      document.getElementById("writing").hidden = false;
      button.hidden = false;
    })
  }



});
