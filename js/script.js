// var studente = {
//   'nome': 'Francesco',
//   'cognome': 'Tomassini',
//   'età': '33'
// }
//
// console.log(typeof studente);
//
//
// for(var key in studente){
//   // alert('Le proprietà di studente sono: ' + key + ' ' + studente[key]);
//   console.log('Le proprietà di studente sono: ' + key + ' ' +  studente[key]);
// }

var listaStudenti = {
  'numStudenti': 6,
  'students':[
    {
      'nome': 'Mario',
      'cognome': 'Rossi',
      'eta': 20
    },

    {
      'nome': 'Marco',
      'cognome': 'Bianchi',
      'eta': 30
    },

    {
      'nome': 'Gianluca',
      'cognome': 'Mariani',
      'eta': 40
    }
  ]

}


var learner;

for(var x = 0; x < listaStudenti.students.length; x++){

  learner = listaStudenti.students[x];


    console.log(learner.nome);
    console.log(learner.cognome);

}




while(listaStudenti.students.length < listaStudenti.numStudenti){
  var nuovoStudente = {};
   nuovoStudente.nome = prompt('Inserisci il tuo nome');

   nuovoStudente.cognome = prompt('Inserisci il tuo cognome');

   nuovoStudente.età = parseInt(prompt('Inserisci la tua eta'));

   listaStudenti.students.push(nuovoStudente);
}

console.log(listaStudenti.students);
