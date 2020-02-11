#! /usr/bin/env node
let fs = require('fs');

let moduleActions = require('./moduleActions');

let args = process.argv

if (args[2] === 'module') {
   moduleActions(args[3], args[4]);
}

