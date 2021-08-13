class Emoji {

  convertEmoji = (text) => {
    let note = {
      text: text
    }

    let params = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(note)
    };

    return fetch('https://makers-emojify.herokuapp.com/', params)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data.emojified_text)
      return data.emojified_text
    });



  };
};
