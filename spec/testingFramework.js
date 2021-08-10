'use strict';

const describe = (description, callback) => {
  console.log(description);
  callback();
}

const it = (label, callback) => {
  console.log(`Test: ${label}`);
  callback();
}

//will divide these up into helpers once we have more matchers//

const expect = (a) => {
  return {
      toEqual: (b) => {
        if (a === b) {
            console.log("pass");
          } else {
            console.log("fail");
          }
        },

  }
}

///tests
it('2+2isnot5', () => {
 expect(2+2).toEqual(5);
});
