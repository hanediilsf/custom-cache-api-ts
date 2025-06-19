import express from "express";
import cacheRoutes from "./routes/cacheRoutes";

const app = express();
app.use(express.json());
app.use("/api", cacheRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
