const fs = require("fs");
const unzipper = require("unzipper");

(async () => {
  if (!fs.existsSync("done.flag")) {
    await fs.createReadStream("TOOLS DDOS VPS __ TERMUX ONLY.zip")
      .pipe(unzipper.Extract({ path: "." }))
      .promise();
    fs.writeFileSync("done.flag", "done");
    console.log("✅ ZIP berhasil diekstrak");
  }

  // Lanjutkan jalankan SC kamu
  require("./index.js"); // Ganti sesuai file hasil ekstrak
})();
