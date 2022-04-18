let server = require("../index");
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("Shirts API", () => {
  describe("Test Get Route /api/shirts", () => {
    it("It should return all shirts", () => {
      chai
        .request(server)
        .get("/api/shirts")
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.a("array");
          response.body.length.should.not.be.equal(0);
          done();
        });
    });

  });
});
