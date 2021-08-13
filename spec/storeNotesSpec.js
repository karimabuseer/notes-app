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


  it('should delete notes in local storage', () => {
    localStorage.clear();

    let storeNotes = new StoreNotes();
    localStorage.setItem("1", "big noods");
    location.hash = "#1";

    storeNotes.deleteNote();
    expect(localStorage.length).toEqual(0);
    localStorage.clear();

  });

});





 // it('2+2isnot5', () => {
 //  expect(2+2).toEqual(5);
 // });
 //
 // it('2+2is4', () => {
 //  expect(2+2).toEqual(4);
 // });
