import express from "express";

const app = express();
app.use(express.json());
const port = 3000;
console.log("hello from server side");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
