// Very dirty and naive basic parser

const
  fs = require('fs'),
  ohm = require('ohm-js');

/*
 * Both grammar and table files could be larger than comfortable
 * so reading should be async and streamed.
 */
const
  defaultTable = 'tables/Test/table_syntax.tab',
  grammarFile = 'src/ts52.ohm';

var contents = fs.readFileSync(grammarFile);
var myGrammar = ohm.grammar(contents.toString('utf8'));

var inputfile = defaultTable;
var myArgs = process.argv.slice(2);

if (myArgs[0]) {
  // eslint-disable-next-line prefer-destructuring
  inputfile = myArgs[0];
}

// First thing to add would be to read table files from parameter
var input = fs.readFileSync(inputfile);

// A bom indicates table is actually utf8

var match = myGrammar.match(input.toString('utf8'));

if (match.succeeded()) {
//  console.log('table parsed');
} else {
  console.log('Unable to parse table', inputfile);
  console.log(match.message);
}
