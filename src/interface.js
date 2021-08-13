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

  function newNote (userInput) { 
    newDiv(userInput);
  };

  function loadNotes () { 
    let allNotes = displayNotes.displayAll();
    for (let i = 0; i < allNotes.length; i++) { 
      newDiv(allNotes[i]);
    }
  };

  function newDiv (val) { 
    const newDiv = document.createElement("div");
    newDiv.classList.add("note");
    newDiv.innerHTML = val;
    list.appendChild(newDiv);
  };

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
      
    })
  }



  
});
