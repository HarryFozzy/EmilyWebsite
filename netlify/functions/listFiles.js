const fs = require('fs');
const resolve = require('path');

exports.handler = async (event, context) => {
  try {
    const folderPath = event.queryStringParameters.folderPath;
    const directoryPath = resolve.join(__dirname, folderPath);
    const files = fs.readdirSync(directoryPath);
    return {
      statusCode: 200,
      body: JSON.stringify(files),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
