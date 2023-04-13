const app = require("../app");
const request = require("supertest");

let token = "";

describe("User register", () => {
  test("user registeration", async () => {
    const req = await request(app).post("/users/register").send({
      username: "abdul1",
      password: "hello123",
    });
    expect(req.statusCode).toEqual(409);
    expect(req.body).toHaveProperty("message");
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

describe("Get task without authorization", () => {
  test("should show error message and 403 status code", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toEqual(403);
  });
});

describe("Get task  authorization", () => {
  test("should show the username and Tasks and 200 status code", async () => {
    const res = await request(app).get("/tasks").set("access-token", token);
    expect(res.body).toHaveProperty("username");
    expect(res.body).toHaveProperty("tasks");
    expect(res.statusCode).toEqual(200);
  });
});
