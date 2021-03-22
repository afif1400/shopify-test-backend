const express = require('express');
const axios = require('axios');
const app = express();

app.get('/orderlist', async (req, res) => {
  try {
    const response = await axios.get(
      'https://122ecced1c845a3916c88e7cd79e3928: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@test-bighaat.myshopify.com/admin/api/2021-01/orders.json'
    );
    res.json(response.data);
  } catch (err) {
    res.send(err.data);
  }
});

app.listen(7000, () => {
  console.log('running on port 7000');
});
