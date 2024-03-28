const pathToLint = "packages/ui/";
const fs = require("fs");
(() => {
  const [msgFilePath] = process.env.HUSKY_GIT_PARAMS
    ? process.env.HUSKY_GIT_PARAMS.split(" ")
    : [];
  const currentMessage = fs.readFileSync(msgFilePath, "utf8");
  const shouldLint = new RegExp(pathToLint, "g").test(currentMessage);
  if (shouldLint) {
    process.exit(1);
  }
  process.exit(0);
})();
