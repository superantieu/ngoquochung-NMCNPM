import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRoutes from "./routes/products.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello Express v5 + TypeScript");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
