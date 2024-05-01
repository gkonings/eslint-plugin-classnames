import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPlugin from "eslint-plugin-eslint-plugin";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintPlugin.configs["flat/recommended"],
  {
    rules: {
      "eslint-plugin/require-meta-docs-description": "error",
    },
  },
];
