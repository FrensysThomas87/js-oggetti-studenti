var studente = {
  'nome': 'Francesco',
  'cognome': 'Tomassini',
  'età': '33'
}

console.log(typeof studente);


for(var key in studente){
  // alert('Le proprietà di studente sono: ' + key + ' ' + studente[key]);
  console.log('Le proprietà di studente sono: ' + key + ' ' +  studente[key]);
}

var listaStudenti = [
  {
    'nome': 'Mario',
    'cognome': 'Rossi',

  },

  {
    'nome': 'Marco',
    'cognome': 'Bianchi',

  },

  {
    'nome': 'Gianluca',
    'cognome': 'Mariani',

  }

]

// for(var i = 0; i < listaStudenti.length; i++){
//   console.log(listaStudenti[i]);
// }

for(var s in listaStudenti){
  // alert('Le proprietà di studente sono: ' + key + ' ' + studente[key]);
  console.log(listaStudenti[s]);
}
