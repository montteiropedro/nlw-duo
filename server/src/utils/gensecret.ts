const { randomBytes } = require("crypto");

/**
 * You can use this script to generate a secret.
 *
 * 1. Open your terminal in the project root folder and type the command below:
 * node ./src/utils/gensecret.js
 *
 */

const generatedSecret = randomBytes(32).toString("hex");
console.log(`\nYour Secret Key: ${generatedSecret}\n`);
