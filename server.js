const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`running on port ${process.env.PORT}`);
  });
});
