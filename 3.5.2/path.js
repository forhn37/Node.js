const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('----------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname : ', path.basename(string, path.extname(string)))
console.log('----------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():',path.format({
  root: 'C:\\',
  dir: 'C:\\Users\\qjqmf\\OneDrive\\바탕 화면\\Soloplay\\Node.js\\3.5.2',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}));
// console.log('path.normalize():', path.normalize('C:\Users\/qjqmf\OneDrive\바탕 화면\Soloplay\Node.js\3.5.2\path.js'));
console.log('path.isAbsolute(C:\\):'), path.isAbsolute('C:\\');
console.log('path.isAbsolute(\Node.js):'), path.isAbsolute('\Node.js');
console.log('path.join():', path.join(__filename));
console.log('path.resoleve():', path.resolve(__dirname, 'path.js'));
console.log(path.filename())