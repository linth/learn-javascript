const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');

const message = 'hello world.', nonce = 1, path = 'http://www.google.com', privateKey = 'haha'; // ...
const hashDigest = sha256(nonce + message);
const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));

console.log(hmacDigest);

/**
 * 
 * 19RTgfqlK63I5dq7bFnRf3pYWuh2MPSMfYLD03ePc8wYNxX7ilAYhBUwg8CHPAHliUGPo6qN2dai61vex3Dv3A==
 */