const cp = require("child_process");
const util = require("util");
const exec = util.promisify(cp.exec);

const appsArr = [
  "node --version",
  "docker --version",
  "nvm --version",
  "npm --version",
  "git --version",
];

async function getVersion(command) {
  try {
    const { stdout } = await exec(command);
    console.log(stdout);
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
}

for (let element of appsArr) {
  getVersion(`${element}`);
}

process.on("SIGINT", () => {
  console.log("process closed");
  process.exit();
});
process.on("SIGTERM", () => {
  console.log("process closed");
  process.exit();
});
