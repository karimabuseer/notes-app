class StoreNotes {

  createNote = (value) => {
    let key = Date.now();
    localStorage.setItem(key,value);
  };




}
