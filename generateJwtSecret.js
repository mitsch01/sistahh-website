const crypto = require("crypto")

// Generate 16 random bytes, then convert to a base64 string
const jwtSecret = crypto.randomBytes(16).toString("base64")

console.log(jwtSecret) // This will print your generated secret key
