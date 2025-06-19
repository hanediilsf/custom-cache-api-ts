import { createCache } from "../src/cache/cache";

describe("Functional Cache (unit)", () => {
  it("gets value before TTL expires", () => {
    const cache = createCache(1000);
    cache.set("hello", "world");
    expect(cache.get("hello")).toBe("world");
  });

  it("expires value after TTL", (done) => {
    const cache = createCache(100);
    cache.set("key", "value");

    setTimeout(() => {
      expect(cache.get("key")).toBeNull();
      done();
    }, 150);
  });
});
