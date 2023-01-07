import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".js", ".ts"];

export default {
  // external: ["rxjs", "rxjs/operators"],
  input: "node_modules/react/.ts",
  output: [
    {
      file: "dist/esm/index.js",
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ babelHelpers: "bundled", extensions }),
  ]
};
