const app = require("../app");
const request = require("supertest");
let token = "";
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

describe("Get task  authorization", () => {
  test("should show the username and Tasks and 200 status code", async () => {
    const res = await request(app).get("/tasks").set("access-token", token);
    expect(res.body).toHaveProperty("username");
    expect(res.body).toHaveProperty("tasks");
    expect(res.statusCode).toEqual(200);
  });
});

describe("Get all Tasks", () => {
  test("should show the username and Tasks and 200 status code", async () => {
    const res = await request(app)
      .post("/tasks")
      .set("access-token", token)
      .send({
        title: "test3",
        description: "science",
        priority: "low",
        dueDate: "05/07/2023",
        taskComments: ["grammer", "another"],
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("message");
  });
});

describe("Get task  by sort", () => {
  test("should show the username and Tasks and 200 status code", async () => {
    const res = await request(app)
      .get("/tasks?sort=priority")
      .set("access-token", token);
    expect(res.body).toHaveProperty("username");
    expect(res.body).toHaveProperty("tasks");
    expect(res.statusCode).toEqual(200);
  });
});


describe("Get task  by filter", () => {
  test("should show the username and Tasks and 200 status code", async () => {
    const res = await request(app)
      .get("/tasks?title=games3&priority=medium")
      .set("access-token", token);
    expect(res.body).toHaveProperty("username");
    expect(res.body).toHaveProperty("tasks");
    expect(res.statusCode).toEqual(200);
  });
});