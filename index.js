const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(config.BOT_TOKEN);

const prefix = config.prefix;

client.once(`ready`, () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', function(message) {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = message.content.split(' ').slice(1);
  const command = message.content.split(' ')[0].slice(prefix.length).toLowerCase();

  if (command === 'ping') {
    message.reply('Pong!');
  }

  if (command === 'assignment' || command === "a") {
    if (args.length < 3) {
      message.reply("You need at least three arguments. (!assignment add <class> <name> [date])")
    } else if (args[0] == "add"){
      // !assignment add Enviro Current Event 1/11/2022
      fs.readFile("assignments.json", function(err, data) {
          if (err) throw err;
          const myAssignments = JSON.parse(data);

          enviroAssignments = myAssignments.Enviro;
          roboticsAssignments = myAssignments.Robotics;
          statAssignments = myAssignments.Statistics;
          englishAssignments = myAssignments.English;
          pythonAssignments = myAssignments.Python;
          apushAssignments = myAssignments.APUSH;
          csm145Assignments = myAssignments.CSM145;
          csm155Assignments = myAssignments.CSM155;

          let assignment = "";
          for (let i = 2; i < args.length - 1; i++) {
            if (i != args.length - 2) {
              assignment = assignment + args[i] + " ";
            } else {
              assignment = assignment + args[i];
            }
          }
          date = args[args.length - 1];
          importantdate = "false"

          if (args[1].toLowerCase() == "enviro") {
            let assignment = "";
            for (let i = 2; i < args.length - 1; i++) {
              assignment = assignment + args[i] + " ";
            }
            date = args[args.length - 1];
            importantdate = "false"
            const myAssignment = new Assignment(assignment, date, importantdate);
            enviroAssignments.push(myAssignment);
            message.reply("Added an assignment!");
          } else if (args[1].toLowerCase() == "robotics") {

            const myAssignment = new Assignment(assignment, date, importantdate);
            roboticsAssignments.push(myAssignment);
            message.reply("Added an assignment!");
          } else if (args[1].toLowerCase() == "statistics") {
            let assignment = "";
            for (let i = 2; i < args.length - 1; i++) {
              assignment = assignment + args[i] + " ";
            }
            date = args[args.length - 1];
            importantdate = "false"
            const myAssignment = new Assignment(assignment, date, importantdate);
            statAssignments.push(myAssignment);
            message.reply("Added an assignment!");
          } else if (args[1].toLowerCase() == "english") {
            let assignment = "";
            for (let i = 2; i < args.length - 1; i++) {
              assignment = assignment + args[i] + " ";
            }
            date = args[args.length - 1];
            importantdate = "false"
            const myAssignment = new Assignment(assignment, date, importantdate);
            englishAssignments.push(myAssignment);
            message.reply("Added an assignment!");
          } else if (args[1].toLowerCase() == "python") {
            let assignment = "";
            for (let i = 2; i < args.length - 1; i++) {
              assignment = assignment + args[i] + " ";
            }
            date = args[args.length - 1];
            importantdate = "false"
            const myAssignment = new Assignment(assignment, date, importantdate);
            pythonAssignments.push(myAssignment);
            message.reply("Added an assignment!");
          } else if (args[1].toLowerCase() == "apush") {
            let assignment = "";
            for (let i = 2; i < args.length - 1; i++) {
              assignment = assignment + args[i] + " ";
            }
            date = args[args.length - 1];
            importantdate = "false"
            const myAssignment = new Assignment(assignment, date, importantdate);
            apushAssignments.push(myAssignment);
            message.reply("Added an assignment!");
          } else if (args[1] == "csm145") {
            let assignment = "";
            for (let i = 2; i < args.length - 1; i++) {
              assignment = assignment + args[i] + " ";
            }
            date = args[args.length - 1];
            importantdate = "false"
            const myAssignment = new Assignment(assignment, date, importantdate);
            csm145Assignments.push(myAssignment);
            message.reply("Added an assignment!");
          } else if (args[1] == "csm155") {
            let assignment = "";
            for (let i = 2; i < args.length - 1; i++) {
              assignment = assignment + args[i] + " ";
            }
            date = args[args.length - 1];
            importantdate = "false"
            const myAssignment = new Assignment(assignment, date, importantdate);
            csm155Assignments.push(myAssignment);
            message.reply("Added an assignment!");
          } else {
            message.reply("That's not a valid class.");
          }

          const myJSON = JSON.stringify(myAssignments);

          var fs = require('fs');
          fs.writeFile("assignments.JSON", myJSON, function(err) {
            if (err) {
              console.log(err);
            }
          });
      });
    }
  }

  if (command === 'assignments' || command === "as") {
    if (args.length != 0) {
      fs.readFile("assignments.json", function(err, data) {
          if (err) throw err;
          const assignments = JSON.parse(data);

          if (args[0].toLowerCase() == "enviro" || args[0].toLowerCase() == "es") {
            enviroAssignments = assignments.Enviro;
            let text = "**" + "Period 1 - AP Enviro (Prater)" + "**";
            text = text + "\n```\n";
            if (enviroAssignments.length == 0) {
              text = text + "- none"
            } else {
              for (let i = 0; i < enviroAssignments.length; i++) {
                text = text + convertToString(enviroAssignments[i]) + "\n";
              }
            }
            text = text + "```";
            message.reply(text);
          }

          if (args[0].toLowerCase() == "robotics" || args[0].toLowerCase() == "r") {
            roboticsAssignments = assignments.Robotics;
            let text = "**" + "Period 2 - Robotics 3 (Oakman)" + "**";
            text = text + "\n```\n";
            if (roboticsAssignments.length == 0) {
              text = text + "- none"
            } else {
              for (let i = 0; i < roboticsAssignments.length; i++) {
                text = text + convertToString(roboticsAssignments[i]) + "\n";
              }
            }
            text = text + "```";
            message.reply(text);
          }

          if (args[0].toLowerCase() == "stat" || args[0].toLowerCase() == "stat" || args[0].toLowerCase() == "s") {
            statAssignments = assignments.Statistics;
            let text = "**" + "Period 3 - AP Statistics (Ozar)" + "**";
            text = text + "\n```\n";
            if (statAssignments.length == 0) {
              text = text + "- none"
            } else {
              for (let i = 0; i < statAssignments.length; i++) {
                text = text + convertToString(statAssignments[i]) + "\n";
              }
            }
            text = text + "```";
            message.reply(text);
          }

          if (args[0].toLowerCase() == "english" || args[0].toLowerCase() == "en") {
            englishAssignments = assignments.English;
            let text = "**" + "Period 4 - AP English IV (Naberhaus)" + "**";
            text = text + "\n```\n";
            if (englishAssignments.length == 0) {
              text = text + "- none"
            } else {
              for (let i = 0; i < englishAssignments.length; i++) {
                text = text + convertToString(englishAssignments[i]) + "\n";
              }
            }
            text = text + "```";
            message.reply(text);
          }

          if (args[0].toLowerCase() == "python" || args[0].toLowerCase() == "p") {
            pythonAssignments = assignments.Python;
            let text = "**" + "Period 5 - Python (Keays)" + "**";
            text = text + "\n```\n";
            if (pythonAssignments.length == 0) {
              text = text + "- none"
            } else {
              for (let i = 0; i < pythonAssignments.length; i++) {
                text = text + convertToString(pythonAssignments[i]) + "\n";
              }
            }
            text = text + "```";
            message.reply(text);
          }

          if (args[0].toLowerCase() == "apush" || args[0].toLowerCase() == "us" || args[0].toLowerCase() == "history" || args[0].toLowerCase() == "h") {
            apushAssignments = assignments.APUSH;
            let text = "**" + "Period 6 - AP US History (Brennan)" + "**";
            text = text + "\n```\n";
            if (apushAssignments.length == 0) {
              text = text + "- none"
            } else {
              for (let i = 0; i < apushAssignments.length; i++) {
                text = text + convertToString(apushAssignments[i]) + "\n";
              }
            }
            text = text + "```";
            message.reply(text);
          }

          if (args[0].toLowerCase() == "csm145" || args[0].toLowerCase() == "m145" || args[0].toLowerCase() == "145" || args[0].toLowerCase() == "cs145") {
            csm145Assignments = assignments.CSM145;
            let text = "**" + "CS M145" + "**";
            text = text + "\n```\n";
            if (csm145Assignments.length == 0) {
              text = text + "- none"
            } else {
              for (let i = 0; i < csm145Assignments.length; i++) {
                text = text + convertToString(csm145Assignments[i]) + "\n";
              }
            }
            text = text + "```";
            message.reply(text);
          }

          if (args[0].toLowerCase() == "csm155" || args[0].toLowerCase() == "m155" || args[0].toLowerCase() == "155" || args[0].toLowerCase() == "cs155") {
            csm155Assignments = assignments.CSM155;
            let text = "**" + "CS M155" + "**";
            text = text + "\n```\n";
            if (csm155Assignments.length == 0) {
              text = text + "- none"
            } else {
              for (let i = 0; i < csm155Assignments.length; i++) {
                text = text + convertToString(csm155Assignments[i]) + "\n";
              }
            }
            text = text + "```";
            message.reply(text);
          }
        });
    } else {
      fs.readFile("assignments.json", function(err, data) {
          if (err) throw err;
          const assignments = JSON.parse(data);
          classesArray = [assignments.Enviro, assignments.Robotics, assignments.Statistics, assignments.English, assignments.Python, assignments.APUSH, assignments.CSM145, assignments.CSM155];
          let text = "";
          for (let i = 0; i < classesArray.length; i++) {
            currentClass = classesArray[i];
            if(currentClass == assignments.Enviro) {
              text = text + "**" + "Period 1 - AP Enviro (Prater)" + "**";
            } else if (currentClass == assignments.Robotics) {
              text = text + "**" + "Period 2 - Robotics (Oakman)" + "**";
            } else if (currentClass == assignments.Statistics) {
              text = text + "**" + "Period 3 - AP Statistics (Ozar)" + "**";
            } else if (currentClass == assignments.English) {
              text = text + "**" + "Period 4 - AP English IV (Naberhaus)" + "**";
            } else if (currentClass == assignments.Python) {
              text = text + "**" + "Period 5 - Python (Keays)" + "**";
            } else if (currentClass == assignments.APUSH) {
              text = text + "**" + "Period 6 - AP US History (Brennan)" + "**";
            } else if (currentClass == assignments.CSM145) {
              text = text + "**" + "CS M145 - Computer Architecture and Organization (Alnaji)" + "**";
            } else if (currentClass == assignments.CSM155) {
              text = text + "**" + "CS M155 - Discrete Structures (Nikjeh)" + "**";
            }

            text = text + "\n```\n";

            let count = 0;
            if (currentClass.length != 0) {
              for (let j = 0; j < currentClass.length; j++) {
                if (currentClass[j].importantdate.toLowerCase() != "true") {
                  text = text + convertToString(currentClass[j]) + "\n";
                  count++;
                }

                if (count == 0) {
                  text = text + "- none";
                }
              }
            } else {
              text = text + "- none";
            }
            text = text + "```";
            text = text + "\n"
          }
          message.reply(text);
      });
    }
  }
});

function convertToString(assignment) {
  let text = "";
  text = text + "- " + assignment.assignment;
  text = text + " (" + assignment.date + ")"
  return text;
}

function Assignment(myAssignment, myDate, myImportantDate) {
  this.assignment = myAssignment;
  this.date = myDate;
  this.importantdate = myImportantDate;
}
