'use strict';


const expect = (a) => {
  return {

    toBeTruthy: () => {
      if (a) {
        console.log('Pass');
      } else {
        console.log('Fail');
      }
    }
  }
}
