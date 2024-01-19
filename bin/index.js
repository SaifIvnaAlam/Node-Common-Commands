#!/usr/bin/env node

const listOfcommands = {
  flutterbuildScript:
    "flutter packages pub run build_runner watch --delete-conflicting-outputs",
};

console.log(listOfcommands["flutterbuildScript"]);
