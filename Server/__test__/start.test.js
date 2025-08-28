const request = require("supertest");
const app = require("../server.js");
const { describe, it } = require("@jest/globals");

describe("GET /", () => {

  it("Should return statusCode 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: "OK!" });
  })

})