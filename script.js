var exec = require("child_process").exec;
var fs = require("fs");
const pathToLint = "packages/ui/";

(() => {
  const [messageFile] = process.env.HUSKY_GIT_PARAMS.split(" ");
  const currentMessage = fs.readFileSync(messageFile, "utf8").trim();
  // .replace(
  //   /^# ------------------------ >8 ------------------------[\s\S]*$|^#.*\n/gm,
  //   ""
  // );
  console.log("🚀 ~ currentMessage:", currentMessage);

  // exec("git diff --name-only --cached -r", (error, stdout, stderr) => {
  //   const stagedFiles = stdout.trim().split(/\r?\n/);
  //   console.log("🚀 ~ exec ~ stagedFiles:", stagedFiles);

  //   const shouldBeLinted = stagedFiles.some((file) =>
  //     file.startsWith(pathToLint)
  //   );
  //   console.log("🚀 ~ exec ~ shouldBeLinted:", shouldBeLinted);
  //   // check if version.json has been modified by commit-msg hook
  //   if (shouldBeLinted) {
  //     // amend the last commit to include the updated version.json
  //     process.exit(1);
  //   }
  //   process.exit(0);
  // });
})();
