import fs from "node:fs";

const CONTRACT_BIN = fs.readFileSync("./build/SimpleStorage_sol_SimpleStorage.bin", "utf-8");
export { CONTRACT_BIN };
