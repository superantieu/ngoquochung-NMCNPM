import request from "supertest";
import app from "../src/app";

describe("Student API", () => {
    it("GET /students should return list", async () => {
        const res = await request(app).get("/students");
        expect(res.status).toBe(200);
    });

    it("POST /students should create new student", async () => {
        const random = Math.floor(Math.random() * 10000);
        const res = await request(app)
            .post("/students")
            .send({ name: "John", age: 20, email: `john${random}@test.com` });

        expect(res.status).toBe(201);
    });
});
