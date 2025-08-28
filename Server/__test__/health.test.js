const { describe, it } = require("@jest/globals");
const app = require("../server");
const request = require("supertest");

describe("GET /health-check", () => {
  
  it("Should return statusCode 200", async () => {
    const res = await request(app).get("/health-check");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({message: "Server is running!", data: "Good!"});
  })

})