module.exports = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root1234",
  database: process.env.DB_DATABASE || "zay",
  host: process.env.DB_HOSTNAME || "localhost",
  //host: "192.168.87.185",
  dialect: "mysql",
};
