const scrape = require("./crawler");

describe("scrape function", () => {
  test("should return an array of products", async () => {
    const result = await scrape();
    expect(result).not.toBeNull();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    for (const product of result) {
      expect(typeof product.name).toBe("string");
      expect(typeof product.price).toBe("string");
      expect(typeof product.link).toBe("string");
      expect(typeof product.sku).toBe("string");
      expect(typeof product.image).toBe("string");
    }
  }, 360000);
});
