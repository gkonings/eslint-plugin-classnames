const plugin = {
  meta: {
    name: "eslint-plugin-classnames",
    version: "0.0.1",
  },
  rules: {
    "my-rule": require("./rules/disallow-classname").default,
  },
};

export default plugin;
