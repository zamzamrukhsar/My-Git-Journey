const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
    test("should return API working message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("My Git Journey API is working!");
    });
});