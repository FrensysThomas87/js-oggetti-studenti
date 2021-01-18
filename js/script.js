var studente = {
  'nome': 'Francesco',
  'cognome': 'Tomassini',
  'età': '33'
}

console.log(typeof studente);


for(var key in studente){
  alert('Le proprietà di studente sono: ' + key + ' ' + studente[key]);
  console.log('Le proprietà di studente sono: ' + key + ' ' +  studente[key]);
}
