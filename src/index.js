const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
  //make array with expr div by 10 items: ['0010101010', ..]
const arrDouble = [];
while (arrDouble.length < expr.length / 10 | 0) {
  arrDouble.push(expr.substring(10*(arrDouble.length), 10*(arrDouble.length+1)));
}  
//make array where 10 numbers div 2 numbers: [ '00', '10', '10', '10', '10' ] [ '00', '00', '00', '00', '10' ] ...
const arrResult = [];

arrDouble.map(function(item) {
  const arrTwo = [];
  while (arrTwo.length < item.length / 2 | 0) {
    arrTwo.push(item.substring(2*(arrTwo.length), 2*(arrTwo.length+1)))  //done [ '00', '10', '10', '10', '10' ] -1arr
  }
  let keyMorse = '';
  for (i=0; i<arrTwo.length; i++) {
    keyMorse = keyMorse+arrTwo[i].replace ('10', '.').replace ('11', '-').replace ('00', ''); // str из . -

  }
 letter = MORSE_TABLE[keyMorse]; 
  if (letter === undefined) {
    letter = ' ';
  }
  arrResult.push(letter);
  })
  
  let result = arrResult.join('');
  return result;

}

module.exports = {
    decode
}