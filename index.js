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
  res.status(200).json({
    slack_name: "Quadri",
    current_day: "Friday",
    utc_time: "2023-09-08T15:12:25Z",
    track: "backend",
    github_file_url: "",
    github_repo_url: "",
    status_code: 200,
  });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
