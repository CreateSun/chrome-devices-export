const fs = require("fs");
const { uaSchema } = require("./schema");
const { checkUAParam } = require("./utils");
const readline = require("readline");

/**
 * import chrome device list
 */

// chrome profile path to write
let profilePath = "";
// device config path to read
let configPath = "";

const args = process.argv.slice(2);

const readProfilePath = async () => {
  if (args.includes("--profile")) {
    profilePath = args[args.indexOf("--profile") + 1];
  } else {
    console.log("Enter the path to the profile file:");
    // 读取控制台输入
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    return new Promise((resolve) => {
      rl.on("line", (line) => {
        profilePath = line;
        rl.close();
        resolve();
      });
    });
  }
};

const readConfigPath = async () => {
  if (args.includes("--config")) {
    configPath = args[args.indexOf("--config") + 1];
  } else {
    console.log("Enter the path to the config file:");
    // 读取控制台输入
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    return new Promise((resolve) => {
      rl.on("line", (line) => {
        configPath = line;
        rl.close();
        resolve();
      });
    });
  }
};

async function main() {
  console.log("Importing chrome device list to profile file...");
  await readProfilePath();
  await readConfigPath();
  // check path
  if (!fs.existsSync(profilePath)) {
    console.error("Profile path is not valid");
    process.exit(1);
  }

  // read config file
  const deviceList = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  // read profile file
  const profile = JSON.parse(fs.readFileSync(profilePath, "utf-8"));

  const deviceListToWrite = [];
  // check device list
  for (const device of deviceList) {
    checkUAParam(device, uaSchema);
    deviceListToWrite.push(device);
  }

  // write device list to profile file
  profile["devtools"]["preferences"]["custom-emulated-device-list"] =
    JSON.stringify(deviceListToWrite);

  // write profile file
  fs.writeFileSync(profilePath, JSON.stringify(profile));
  console.log("Device list imported successfully");
}

main();
