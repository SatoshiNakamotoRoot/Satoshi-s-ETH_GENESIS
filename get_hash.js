#!/usr/bin/env node
// Get Ethereum testnet block 1028201 hash

var augur = require("augur.js");
var log = console.log;

var magicblock = 1028201;

augur.connect();

if (augur.listening) {
    var blockNumber = augur.blockNumber();
    if (blockNumber >= magicblock) {
        log(augur.getBlockByNumber(magicblock).hash);
    }
}
