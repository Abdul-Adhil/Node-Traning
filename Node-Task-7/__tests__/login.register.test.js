const app = require("../app");
const request = require("supertest");

describe("User register", () => {
  test("user registeration", async () => {
    const res = await request(app).post("/users/register").send({
      username: "abdul1",
      password: "hello123",
    });
    console.log(res.body);
    expect(res.statusCode).toEqual(409);
    expect(res.body).toHaveProperty("message");
    
  });
});

describe("User register", () => {
    test("user registeration", async () => {
      const res = await request(app).post("/users/register").send({
        username: "abduladhil",
        password: "hello123",
      });
      console.log(res.body);
      expect(res.statusCode).toEqual(409);
      expect(res.body).toHaveProperty("message");
      // expect(res.body).toHaveProperty("token");
      
    });
  });

describe("User Login", () => {
  test("Get the user token in login", async () => {
    const req = await request(app).post("/users/login").send({
      username: "abdul1",
      password: "hello123",
    });
    token = req.body.token;
    expect(req.body).toHaveProperty("token");
  });
});
