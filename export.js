const fs = require("fs");
const readline = require("readline");

// export chrome device list

// profile path to read
let profilePath = "";

const args = process.argv.slice(2);

const parseArgs = async () => {
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
  if (!fs.existsSync(profilePath)) {
    console.error("Profile path is not valid");
    process.exit(1);
  }
};

async function main() {
  await parseArgs();

  // get device list from chrome profile path
  const data = fs.readFileSync(profilePath, "utf-8");

  const json = JSON.parse(data);

  // get device list from chrome profile path
  const deviceList = JSON.parse(
    json["devtools"]["preferences"]["custom-emulated-device-list"]
  );

  // write device list in a new file
  const newConfigPath = "chrome-device-list-new.json";
  if (fs.existsSync(newConfigPath)) {
    console.error("New config file already exists");
    process.exit(1);
  }
  try {
    fs.writeFileSync(newConfigPath, JSON.stringify(deviceList));
    console.log("Device list exported to config file");
  } catch (error) {
    console.error(error);
  }
}

main();
