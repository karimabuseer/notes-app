'use strict';

describe('StoreNotes', ()=> {


  it('should store note in local storage', () => {
    localStorage.clear();

    let storeNotes = new StoreNotes();
    storeNotes.createNote("noodle test, nooooooodles.")

    let key = localStorage.key(0);
    let value = localStorage.getItem(key);

    expect(value).toEqual("noodle test, nooooooodles.");
    localStorage.clear();
  });
});
