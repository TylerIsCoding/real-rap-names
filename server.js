const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
  '21 savage': {
    age: 30,
    birthName: 'Shéyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
  },
  'chance the rapper': {
    age: 29,
    birthName: 'Chancelor Johnathan Bennett',
    birthLocation: 'Chicago, Illinois',
  },
  dylan: {
    age: 'Dylan',
    birthName: 'Dylan',
    birthLocation: 'Dylan',
  },
};

app.get('/', (request, response) => {
  // We heard a get request for '/' and now we're gonna send back a response. So let's send back a response with __dirname + index.html.
  response.sendFile(__dirname + '/index.html');
});

// The /:rapperName is a query parameter. We can use request.params.rapperName to just return that parameter.
app.get('/api/:rapperName', (request, response) => {
  const rapperName = request.params.rapperName.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers['dylan']);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
