const authorize = (req, res, next) => {
  console.log("authorize");
  const { user } = req.query;
  if (user === "rangaraju") {
    res.send(`Welcome ${user}`);
  } else {
    res.status(401).send(`unauthorized`);
  }

  next();
};

module.exports = authorize;
