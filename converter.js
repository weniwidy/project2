const moment = require('moment-timezone');

function getCurrentLocalDateTime() {
    return moment().format('YYYY-MM-DD hh:mm:ss A');
  }

console.log(getCurrentLocalDateTime());

console.log(moment.tz('America/New_York').toString());
