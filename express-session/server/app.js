const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

app.listen(7070, () => {
  console.log("listening 7070 port");
});

app.use(
  session({
    secret: "hello",
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
    },
    resave: false,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.post("/login", (req, res) => {
  // console.log();
  const { id, password } = req.body;

  console.log(id, password);
  // if (req.session.user) {
  //   console.log("user 있어요!!");
  // } else {
  //   req.session.user = {
  //     id,
  //     password,
  //   };
  // }
  // console.log(req.session, session);

  res.send("Response Message");
});
