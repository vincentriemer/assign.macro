const { createMacro } = require("babel-plugin-macros");

module.exports = createMacro(assignMacro);

function assignMacro({ references, state, babel }) {
  references.default.forEach((referencePath) => {
    if (referencePath.parentPath.type === "CallExpression") {
      asFunction(referencePath.parentPath.get("arguments"), state, babel);
    } else {
      throw new Error("assign.macro can only be called as a function");
    }
  });
}

function asFunction(argumentsPaths, state, babel) {
  const target = argumentsPaths[0].node;
  const source = argumentsPaths[1].node;

  argumentsPaths[0].parentPath.replaceWithMultiple(
    createAssignmentAST(target, source.properties, babel.template)
  );
}

function createAssignmentAST(target, properties, template) {
  const buildAssignment = template(`
    TARGET.KEY = VALUE;
  `);

  return properties.map((prop) => {
    if (prop.type === "ObjectMethod") {
      throw new Error("assign.macro cannot assign Object Methods");
    }
    return buildAssignment({
      TARGET: target,
      KEY: prop.key,
      VALUE: prop.value
    });
  });
}
