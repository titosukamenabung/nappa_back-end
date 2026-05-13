import express from "express";
import cors from "cors";

import eventRoute from "./routes/eventRoute"
import categoryRoute from "./routes/categoryRoute"
import productRoute from "./routes/productRoute"

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ini adalah api untuk Nappa Milano");
})

app.use("/event", eventRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
})