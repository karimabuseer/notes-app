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

});
