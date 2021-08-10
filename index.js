var trimDataJSON = function (data, schema) {
  return {
    trimjson: async function (data, schema) {
      let result = await trimObjectBySchema(data, schema);
      return result;
    },
  };
};

exports.trimDataJSON = trimDataJSON;

exports.trimjson = function (data, schema) {
  console.log()
  var dataJSON = new trimDataJSON(data, schema);
  return dataJSON.trimjson(data, schema);
};

function pick(obj, ...keys) {
  const copy = {};
  keys.forEach((key) => (copy[key] = obj[key]));
  return copy;
}

async function trimObjectBySchema(obj, schema) {
  return new Promise((resolve) => {
    let data = {};
    Object.keys(schema).map(async (x, i) => {
      if (obj[x] !== undefined && obj[x] !== null) {
        if (typeof obj[x] === "object" && Object.values(obj[x]).length !== 0) {
          if (Array.isArray(obj[x])) {
            obj[x].map(async (z, number) => {
              data[x] = [];
              let objcopy = await trimObjectBySchema(z, schema[x][0]);
              if (
                !(
                  Object.values(objcopy).length === 1 &&
                  Object.values(objcopy)[0] === undefined
                )
              ) {
                data[x].push(objcopy);
              }
              if (Object.keys(obj[x]).length === number) {
                data[x] = data[x].filter((x) => Object.keys(x).length !== 0);
              }
            });
          } else {
            data[x] = {};
            let objcopy = await trimObjectBySchema(obj[x], schema[x]);
            Object.keys(objcopy).map((item, number) => {
              data[x][Object.keys(objcopy)[number]] =
                objcopy[Object.keys(objcopy)[number]];
            });
          }
        } else {
          let copy = pick(obj, x);
          if (copy[Object.keys(copy)[0]] !== undefined) {
            data[Object.keys(copy)[0]] = copy[Object.keys(copy)[0]];
          }
        }
      }
      if (Object.keys(schema).length - 1 === i) {
        resolve(data);
      }
    });
  });
}


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('HITTEING');
      }, 2000);
    });
  }
  
  async function asyncCall(data, schema) {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
 exports.asyncCall = asyncCall