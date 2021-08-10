var trimjson = require('../index.js').trimjson

var data = {
    fname: 'first name',
    lname : "last name",
    address : "india"

};

var schema = {
    fname: "string",
    lname : "string",
    fullname : "string"
};
describe("trinjson",  function() {

	it("should not manipulate the raw data", async function() {

		var result = await trimjson(data, schema);

        expect(result).toEqual({
            fname: 'first name',
            lname : "last name",
        });

	});


});