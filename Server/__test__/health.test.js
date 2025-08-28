const { describe, it } = require("@jest/globals");
const server = require("../server");
const request = require("supertest");
const mongoose = require('mongoose');

describe("GET /health-check", () => {
  beforeAll(async () => {
    await mongoose.connection.close();
    server.close();
  })
  
  it("Health Check Test 1 - should return statusCode '200'", async () => {
    const res = await request(server).get("/health-check");
    expect(res.statusCode).toEqual(200);
  })

  it("Health Check Test 2 - should return message 'Server is running!'", async () => {
    const res = await request(server).get("/health-check");
    expect(res.body).toEqual({ message: "Server is running!", data: "Good!"});
  })
})