const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    let requests = req.body.developers.map(d => axios.get(`https://api.github.com/users/${d}`));

    let results = await Promise.all(requests);

    let out = results.map(r => ({
      name: r.data.name,
      bio: r.data.bio
    }));

    return res.json(out);
  } catch (err) {
    next(err);
  }
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});