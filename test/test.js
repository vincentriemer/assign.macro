const pluginTester = require("babel-plugin-tester");
const plugin = require("babel-plugin-macros");

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: { filename: __filename },
  tests: [
    `
      import assign from "../dist/assign.macro";

      const test = {};

      assign(test, { 
        babel: "macros",
        are: "dope" 
      });
    `,
    `
      import assign from "../dist/assign.macro";

      const test = {};
      const foo = "bar";

      assign(test, { foo });
    `,
    `
      import assign from "../dist/assign.macro";

      const test = {};
      const testProp1 = "bar";

      assign(test, { 
        testProp1,
        testProp2: () => {
          console.log("foo");
        },
        testProp3: 5,
        testProp4: ["foo", "bar"],
        testProp5: { foo: "bar" }
      });
    `
  ]
});
