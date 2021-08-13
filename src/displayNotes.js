class DisplayNotes {
  
  displayAll = (note) => {
    const allNotes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      value = cutNotes(value);
      allNotes.push(`<a href="#${key}">${value}</a>`)
    };
    return allNotes
  };

  selectNote = (note) => {  
    let item = location.hash.split("#")[1];

    return localStorage.getItem(item);
  };

  cutNotes = (value) => {
  if (value.length <= 20) {
    return value;
  } else {
   return value.slice(0,19);
  }
 }
 
};
