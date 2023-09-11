const fs = require('fs');
const { resolve } = require('path');

exports.handler = async (event, context) => {
  try {
    const folderPath = './Gallery/CoupleShoots';
    const files = fs.readdirSync(folderPath);
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
