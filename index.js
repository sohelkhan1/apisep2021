const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Learnt Node JS with PDAC - PickupBiz");
});

app.get("/team", (req, res) => {
  res.send("1. Faiz, 2. Tushar, 3. Sufiyan, 4. Shafi etc....");
});
app.get("/teamjson", (req, res) => {
  res.json({
    teams: [
      { name: "Faiz", mob: "79878787", email: "faiz@gmail.com" },
      { name: "Tushar", mob: "87778787", email: "tushar@gmail.com" },
      { name: "Sufiyan", mob: "7686554", email: "sufiyan@gmail.com" },
      { name: "Shafi", mob: "787979222", email: "shafi@gmail.com" },
      { name: "Imroz", mob: "989898", email: "imroz@gmail.com" },
    ],
  });
});
app.listen(5050, () => {
  console.log("My service is running on port 5050");
});
