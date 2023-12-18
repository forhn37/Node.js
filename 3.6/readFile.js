const fs = require('fs')

fs.readFile('readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
})

// readFile은 buffer를 결과물로 갖고 온다. data (buffer형식)
// data -> toString => 읽을수 있는 형태가 된다. 