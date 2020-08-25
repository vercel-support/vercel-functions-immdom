module.exports = (req, res) => {
  const { basicThing = "Gucci" } = req.query;
  res
    .status(200)
    .send(
      `Hello, I'm basic - like ${basicThing}! Change what's basic by adding ?basicThing=<yourBasicThing>`
    );
};
