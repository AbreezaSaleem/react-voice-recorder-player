import { dts } from "rollup-plugin-dts";

const config = [
  {
    input: "./types.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;
