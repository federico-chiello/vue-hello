// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.

var app = new Vue({
  el: '#title',
  data: {
    message: 'Ciao a tutti dalla Norvegia',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdX8rrmt9-u1L4Jzk61bj6d1fV_HvG1n_5A&usqp=CAU',
    paesaggio: 'montagna',
    sfondo: 'blue',
    colore: 'white'
  }
});
