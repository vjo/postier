const headers = {
  "X-Okapi-Key": process.env.OKAPI_KEY,
  Accept: "application/json",
};

export default (req, res) => {
  const { id } = req.query;

  fetch(`https://api.laposte.fr/suivi/v2/idships/${id}?lang=en_GB`, {
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    })
    .catch((err) => {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(err));
    });
};
