const express = require("express");
const app = express();
const { spawn } = require("child_process");

app.get("/", function (req, res) {
  const pyProcess = spawn("python", ["./script.py"]);

  pyProcess.stdout.on("data", function (data) {
    res.send(data.toString());
  });

  pyProcess.stderr.on("data", (data) => {
    res.send("[ERROR] : " + data.toString());
  });
});

app.listen({ port: 3000, host: "0.0.0.0" }, function (err) {
  if (err) {
    throw new Error(err);
  }
  console.log(`[SYSTEM] Server Started`);
});
