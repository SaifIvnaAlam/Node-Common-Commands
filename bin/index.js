#!/usr/bin/env node
const chalk = require("chalk");
const inquirer = require("inquirer");
const listOfFluttercommands = {
  flutterbuildScript:
    "flutter packages pub run build_runner watch --delete-conflicting-outputs",
};

async function run() {
  const choices = inquirer.prompt([
    {
      type: "list",
      name: "list",
      message: "Choose a Language",
      choices: ["flutter", "JavaScript"],
    },
  ]);
  return choices;
}

run().then((choices) => {
  console.log(chalk.blue(choices));
  if (choices.list == "flutter") {
    for (var key in listOfFluttercommands) {
      console.log(key + " : " + listOfFluttercommands[key]);
    }
  } else {
    console.log("No commands found for " + choices.list);
  }
});
