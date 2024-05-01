const disallowClassname = (context) => {
  return {
    Identifier(node) {
      if (node.name === "badIdentifier") {
        context.report({
          node,
          message: "Do not use badIdentifier",
        });
      }
    },
  };
};

export default disallowClassname;
