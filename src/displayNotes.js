class DisplayNotes {
  
  displayAll = (note) => {
    const allNotes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      let displayedNote;
      allNotes.push(`<a href="#${key}">${value}</a>`)
    };
    return allNotes
  };

  selectNote = (note) => {
    let item = location.hash.split("#")[1];

    note.innerText = localStorage.getItem(item);
  };

  cutNotes = () => {
  if (value.length <= 20) {
    displayedNote = value;
  } else {
    displayedNote = value.slice(0,19);
  }
 }
 
};
