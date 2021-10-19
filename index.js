const express = require("express");
const cors = require("cors");
const {json}=require("express")
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Learnt Node JS with PDAC - PickupBiz");
});

app.get("/team", (req, res) => {
  res.send("1. Faiz, 2. Tushar, 3. Sufiyan, 4. Shafi etc....");
});
app.get("/teamjson", (req , res) => {
  res.json({
    teams: [
      { name: "Faiz", mob: "79878787", email: "faiz@gmail.com" },
      { name: "Tushar", mob: "87778787", email: "tushar@gmail.com" },
      { name: "Sufiyan", mob: "7686554", email: "sufiyan@gmail.com" },
      { name: "Shafi", mob: "787979222", email: "shafi@gmail.com" },
      { name: "Imroz", mob: "98989898", email: "imroz@gmail.com" },
    ],
  });
});
app.post("/saveemp",(req,res)=>{
 console.log(req.body);
 const {num1, num2,num3}= req.body;
 const sum= num1+num2+num3;
 res.json({sum});
 res.end();

})
app.listen(5050, () => {
  console.log("My service is running on port 5050");
});
