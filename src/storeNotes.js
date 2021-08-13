class StoreNotes {

  createNote = (value) => {
    let key = Date.now();
    localStorage.setItem(key,value);
  };


  deleteNote = () => {
      let key = location.hash.split("#")[1];
      localStorage.removeItem(key);
    };

}
