import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import modulePackage from "module";
import packageJson from "./package.json";

const input = ["src/index.ts"];
const extensions = [".ts"];

export default {
  input,
  external: [...Object.keys(packageJson.dependencies), ...modulePackage.builtinModules],
  onwarn: (warning) => {
    throw new Error(warning.message); // Warnings are usually high-consequence for us so let's throw to catch them
  },
  plugins: [
    resolve({
      extensions,
      rootDir: "./src",
      preferBuiltins: true,
    }),
    json(),
    replace({
      preventAssignment: true,
      values: {
        __PACKAGE_VERSION__: JSON.stringify(packageJson.version),
      },
    }),
    babel({
      extensions,
      babelHelpers: "bundled",
      include: ["src/**/*"],
    }),
  ],
  output: [
    {
      file: packageJson.module,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
    {
      file: packageJson.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
  ],
};
