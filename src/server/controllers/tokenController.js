const { Token } = require('../models');

module.exports = {
  async list(req, res) {
    const response = await fetch('https://api.dexscreener.com/token-profiles/latest/v1', {
      method: 'GET',
      headers: {},
    });
    return response.json();
    
  },

  add(req, res) {
    const { name, symbol, address } = req.body;

    Token.create({
      name: name,
      symbol: symbol,
      address: address,
    });
  },

  delete(req, res) {
    const { address } = req.body;

    console.log(req.body);

    Token.destroy({
      where: {
        address: address,
      },
    })
      .then((status) =>
        res.status(201).json({
          error: false,
          message: 'token has been deleted',
        })
      )
      .catch((error) =>
        res.json({
          error: true,
          error: error,
        })
      );
  },
};
