import express from "express";
const router = express.Router();

interface Product {
  id: number;
  name: string;
  price: number;
}

let products: Product[] = [];

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  const { name, price } = req.body;
  const newProduct: Product = { id: Date.now(), name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Not found" });
  }
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter((p) => p.id !== id);
  res.json({ message: "Deleted" });
});

export default router;
