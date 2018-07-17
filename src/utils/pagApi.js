const apiUri = 'http://api.mariedu.com.br/api/';


export const Api = {

  newGuest(name, guests) {
    
    return fetch(apiUri+'add', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        name: name,
        guests: guests
      })
    })
    .then(res => {
      console.log(res);
      return res.status;
    });
  },

  sendPayment(id, desc, val) {
    return fetch(apiUri+'pag', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        id: id,
        desc: desc,
        valor: val
      })
    })
    .then(res => res.text())
    .then(res => window.location = res);  
  }

}



export default Api;