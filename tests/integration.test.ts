import express from "express";
import request from "supertest";
import cacheRoutes from "../src/routes/cacheRoutes";

const app = express();
app.use(express.json());
app.use("/api", cacheRoutes);

describe("Cache API (integration)", () => {
  it("stores and retrieves a value via API", async () => {
    await request(app)
      .post("/api/cache")
      .send({ key: "user", value: "Hanedi" });

    const response = await request(app).get("/api/cache/user");
    expect(response.body.value).toBe("Hanedi");
  });
});
