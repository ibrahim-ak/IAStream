const { describe, it } = require("@jest/globals");
const server = require("../../../server");
const request = require("supertest");
const mongoose = require('mongoose');

describe("GET /", () => {
  
  it("Start Route Test 1 - Should Return 'OK!'", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
  })

  it("Start Route Test 2 - Should Return 'OK!'", async () => {
    const res = await request(server).get("/");
    expect(res.body).toEqual({ message: "OK!"});
  })
  
  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  })
})