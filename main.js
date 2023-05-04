const fs = require('fs');
const carbone = require('carbone');

// Data to inject
var data = [
  {
    movieName : 'Matrix',
    actors    : [{
      firstname : 'Keanu',
      lastname  : 'Reeves'
    },{
      firstname : 'Laurence',
      lastname  : 'Fishburne'
    },{
      firstname : 'Carrie-Anne',
      lastname  : 'Moss'
    }]
  },
  {
    movieName : 'Back To The Future',
    actors    : [{
      firstname : 'Michael',
      lastname  : 'J. Fox'
    },{
      firstname : 'Christopher',
      lastname  : 'Lloyd'
    }]
  }
];

var options = {
  convertTo : 'pdf' //can be docx, txt, ...
};

carbone.render('./node_modules/carbone/examples/movies.docx', data, options, function(err, result){
  if (err) return console.log(err);
  fs.writeFileSync('movies_result.pdf', result);
});

carbone.render('./node_modules/carbone/examples/flat_table.ods', data, options, function(err, result){
  if (err) return console.log(err);
  fs.writeFileSync('flat_table_result.pdf', result);
});