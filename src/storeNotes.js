class StoreNotes {

  createNote = (value) => {
    let key = Date.now();
    localStorage.setItem(key,value);
    //
    // list_of_notes.push(key);
  };




}
