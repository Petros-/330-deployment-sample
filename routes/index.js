const { Router } = require("express");
const router = Router();

router.use("/items", require('./items'));
router.get("/", (req, res, next) => {
  res.send(`
    <html>
      <body>
        <h1> Hello, peoples! </h1>
        <p> Noice </p>
      </body>
    </html>
  `)
});

module.exports = router;