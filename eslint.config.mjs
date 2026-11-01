import js from "@eslint/js";
import { createConfig, DEFAULT_IGNORES } from "eslint-plugin-portable-paths";
import globals from "globals";

const ignores = ["coverage/**", "fixtures/integration/**"];
const portablePaths = createConfig({
  root: import.meta.dirname,
  ignores: [...DEFAULT_IGNORES, ...ignores],
});
portablePaths.rules["portable-paths/max-pathname-length"] = [
  "error",
  { max: 200, maxNameBytes: 255 },
];

export default [
  { ignores },
  js.configs.recommended,
  {
    files: ["**/*.mjs", "**/*.js"],
    languageOptions: { globals: globals.node },
  },
  portablePaths,
];
