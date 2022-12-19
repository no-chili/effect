// 打包ts
import typescript from "rollup-plugin-typescript2";
// sourcemap
import sourceMaps from "rollup-plugin-sourcemaps";
// 清除注释
import clean from "rollup-plugin-cleanup"
// 清除log
import strip from '@rollup/plugin-strip'

export default {
  input: 'src/main.ts',
  plugins:[
    typescript({
        tsconfig: "./tsconfig.json"
    }),
    sourceMaps(),
    strip(),
    clean()
  ],
  output: [
    {
      format: 'es',
      file: 'package/lib/bundle.esm.js',
      sourcemap: true
    },
    {
      format: 'cjs',
      file: 'package/lib/bundle.cjs.js',
      sourcemap: true
    },
  ]
};
