import { Router, Request, Response } from "express";
import { createCache } from "../cache/cache";

const router = Router();
const cache = createCache(10000); // 10 seconds TTL

router.post("/cache", (req: Request, res: Response) => {
  const { key, value } = req.body;
  cache.set(key, value);
  res.json({ message: "Value cached" });
});

router.get("/cache/:key", (req: any, res: any) => {
  const value = cache.get(req.params.key);
  if (value === null) {
    return res.status(404).json({ message: "Cache miss or expired" });
  }
  res.json({ value });
});

export default router;
