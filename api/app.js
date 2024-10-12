import express from "express";

const app = express();
const port = 9256;


app.use("/api/test",(req,res)=>{
  res.send("It is Working!")
})

app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`);
});
