const moment = require("moment");

const name = "Hello";

console.log(name);

const date = moment().format("DD/MM/YYYY hh:mm a");
const future = moment().add(3, "days");

console.log(future.format("DD/MM/YYYY"));