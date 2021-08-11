'use strict';

describe('DisplayNotes', ()=> {


  it('should display a list of notes max 20char', () => {
      localStorage.clear();
      let key = 0;
      localStorage.setItem(key, "admklskfldsfkldslkfsdlfjdslkfdslkfldsfklsdfldsd");

      let displayNotes = new DisplayNotes();
      let note = document.querySelector('#listOutput');

      displayNotes.displayAll(note);
      // console.log(note.innerHTML)
      expect(note.innerHTML).toEqual(`<a href="#${key}">admklskfldsfkldslkf</a>`);
      localStorage.clear();
  });


  it('should display the selected note', () => {
    localStorage.clear();
    let key = 1;
    localStorage.setItem(key, "send noods");

    let displayNotes = new DisplayNotes();
    let note = document.querySelector('#noteOutput');

    location.hash = "#1";
    displayNotes.selectNote(note);
    expect(note.innerText).toEqual("send noods");

  });
})


// it('2+2is4', () => {
//  expect(2+2).toEqual(4);
// });
