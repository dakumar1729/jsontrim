var trimjson = require("../index.js").trimjson;

var data = {
  fname: "first name",
  lname: "last name",
  address: {
    housenumber: 123,
    area: "area",
    state: "state",
    country: "country",
    pin: 4343,
  },
};

var schema = {
  fname: "string",
  lname: "string",
  address: {
    housenumber: "number",
    state: "string",
    country: "string",
  },
};
describe("trinjson", function () {
  it("should transform data", async function () {
    var result = await trimjson(data, schema);
    expect(result).toEqual({
      fname: "first name",
      lname: "last name",
      address: {
        housenumber: 123,
        state: "state",
        country: "country",
      },
    });
  });
});
