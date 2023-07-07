import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {
  let path = './';

  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/contact-me':
      path += 'contact-me.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  res.setHeader('Content-Type', 'text/html');

  fs.readFile(path, (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening at port 3000');
});
