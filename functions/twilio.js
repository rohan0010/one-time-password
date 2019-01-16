const twilio = require('twilio');

const accountSid = 'ACe90f80c65ca867e0765315417d02ceaa';
const authToken = 'f1dde333082ba507aaf05a96e0d8028c';

module.exports = new twilio.Twilio(accountSid,authToken);