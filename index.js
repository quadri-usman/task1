const express = require("express");
const { json } = require("express");
const task1 = require("./routes/task1Route");
const { PORT } = process.env;
const app = express();
const cors = require("cors");

app.use(json());

app.use("/api/task1", task1);
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.status(200).send({
    slackUsername: "Quadri USman",
    backend: true,
    age: 36,
    bio: "I am a fullstack developer with skills in HTML, CSS, JavaScript, Node.Js, Express, MongoDB, etc.",
  });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
