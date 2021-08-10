var trimjson = require('../index.js').trimjson

var data = {
    fname: 'anil',
    lname : "kumar",
    address : "india"

};

var schema = {
    fname: "string",
    lname : "string",
    fullname : "string"
};
async function test(){
    var result = await trimjson(data, schema);
    console.log("result--------->",result)
}
test()