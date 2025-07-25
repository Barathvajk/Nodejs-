const fs = require('fs');

const requesthandler = (req,res) => {
    const url = req.url;
    const method = req.method;

if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter a Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if(url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parsebody = Buffer.concat(body).toString();
      const message = parsebody.split('=')[1];
      console.log(message);
      fs.writeFileSync('message.txt', message);
      res.statusCode = 303;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
  else
{
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My-Server</title></head>');
  res.write('<body><h1>Hello From My NodeJS Server</h1></body>');
  res.write('</html>');
  res.end();
};
};

module.exports = requesthandler;