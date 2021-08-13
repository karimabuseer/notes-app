'use strict';

describe('Emoji', () => {
  it('should convert string to emoji', () => {
    let emoji = new Emoji();
    let noteWithEmoji = emoji.convertEmoji("time for some :ramen:");
    noteWithEmoji.then(data => expect(data).toEqual("time for some 🍜"));

    localStorage.clear();
  });

});
