const request = require("supertest");
const app = require("../index");
describe("Get Shirts Endpoints", () => {
  it("should get all shirts", async () => {
    const res = await request(app).get("/shirts");
    expect(res.statusCode).toEqual(200);
    // as we have 18 entries in our database, we can change it
    // according to no of entries we have in our DB.
    expect(res._body.length).toEqual(18);
  });
  it("Collection should contain shirt named `Southview Clarke`", async () => {
    const res = await request(app).get("/shirts");
    expect(res.statusCode).toEqual(200);
    expect(res._body[0].name).toEqual("Southview Clarke");
  });
});
