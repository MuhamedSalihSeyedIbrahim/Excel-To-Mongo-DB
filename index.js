const readXlsxFile = require("read-excel-file/node");

const { schema } = require("./model/excel/excel");

const path = "./assets/resource.xlsx";
// File path.
// readXlsxFile('./assets/resource.xlsx').then((rows) => {
//   console.log(rows);
// })

const { dbConnection } = require("./db/connection");

const mongoose = require("mongoose");

const model = require("./model/db/db");

 async function main() {
  try {
    await dbConnection();

    let { rows, error } = await readXlsxFile(path, { schema });
    console.log(rows);

    const { doc, error: dbError } = await model.insertMany(rows);

    if (dbError || error) {
      throw dbError || error;
    }
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

main();
