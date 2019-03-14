const model = require("./model.js");

const fs = require("fs");
const handlebars = require("handlebars");

const inFile = "./index.hbs";
const outFile = "./index.html";

function getTemplate() {
  let source = fs.readFileSync(inFile, "utf8");
  let template = handlebars.compile(source, { strict: true });
  let result = template(model.data);

  fs.writeFileSync(outFile, result);
  //console.log(result);
  console.log(`File written to ${outFile}`);
}

module.exports = {
  getTemplate
};
