const http = require("http");
const port = 8080;

function logger(req) {
  console.log(`${new Date().toISOString()} - ${req.url} - ${req.method}`);
}

function getMovies(req, res) {
  const movies = {
    name: "THE PANISHER",
    year: 2021,
  };
  return movies;
}

function getSports(req, res) {
  const sports = {
    name: "Dhoni",
    year: 1980,
  };
  return sports;
}

const server = http.createServer((req, res) => {
  logger(req);
  //res.setHeader("Content-type", "text/plain");
  //res.setHeader("Content-type", "text/html");
  const html = "<h1>HELLO WORLD!</h1>";
  //res.write(html);
  res.setHeader("Content-type", "application/json");
  const movies = {
    name: "THE PANISHER",
    year: 2021,
  };
  let result = "WELCOME";
  if (req.url == "/sports") {
    result = getSports();
  } else if (req.url == "/movies") {
    result = getMovies();
  }
  res.write(JSON.stringify(result));
  res.end();
});

console.log(`Server is running in localhost:${port}`);
server.listen(port);
