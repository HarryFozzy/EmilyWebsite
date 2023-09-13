const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    const directoryPath = event.queryStringParameters.folderPath;; // Specify the directory you want to list

    // Use fs.readdirSync to list files and directories
    const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

    // Process the entries and build the directory structure
    const directoryStructure = entries.map((entry) => {
      const isDirectory = entry.isDirectory();
      return {
        name: entry.name,
        isDirectory,
        path: isDirectory
          ? path.join(directoryPath, entry.name)
          : path.join(directoryPath, entry.name),
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(directoryStructure),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
