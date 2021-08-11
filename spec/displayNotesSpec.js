'use strict';

describe('DisplayNotes', ()=> {


  it('should display a list of notes max 20char', () => {
      localStorage.clear();
      let key = 0;
      localStorage.setItem(key, "s");

      let displayNotes = new DisplayNotes();
      let note = document.querySelector('#createNote');

      displayNotes.displayAll(note);
      expect(note.innerHTML).toEqual(`<a href="#${key}">s</a>`);
      localStorage.clear();
  });


  it('should display the selected note', () => {
    localStorage.clear();
    let key =0;
    localStorage.setItem(key, "lalalalaalalalalalalalaaaaaaaaa");

    let displayNotes = new DisplayNotes();
    let note = document.querySelector('#noteOutput');
  })
});


// it('2+2is4', () => {
//  expect(2+2).toEqual(4);
// });
