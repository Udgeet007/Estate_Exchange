import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
const app = express();
const port = 8000;

app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`);
});
