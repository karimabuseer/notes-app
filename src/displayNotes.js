class DisplayNotes {

  displayAll = (note) => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      let displayedNote;
      if (value.length <= 20) {
        displayedNote = value;
      } else {
        displayedNote = value.slice(0,19);
      }
      note.innerHTML += `<a href="#${key}">${displayedNote}</a>`
    };
  };

  selectNote = (note) => {
    let item = location.hash.split("#")[1];

    note.innerText = localStorage.getItem(item);
  };

};
