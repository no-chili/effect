import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import  strip from '@rollup/plugin-strip'

export default {
  input: 'src/main.ts',
  plugins:[
    typescript({
      exclude: "node_modules/**",
    }),
    sourceMaps(),
    strip()
  ],
  output: [
    {
      format: 'es',
      file: 'lib/bundle.esm.js',
      sourcemap: true
    },
    {
      format: 'cjs',
      file: 'lib/bundle.cjs.js',
      sourcemap: true
    },
  ],
};
