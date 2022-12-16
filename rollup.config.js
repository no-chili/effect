// 打包ts
import typescript from "rollup-plugin-typescript";
// sourcemap
import sourceMaps from "rollup-plugin-sourcemaps";
// 清除注释
import clean from 'rollup-plugin-cleanup'
// 压缩代码
import {terser} from 'rollup-plugin-terser'
// 清除log
import  strip from '@rollup/plugin-strip'

export default {
  input: 'src/main.ts',
  plugins:[
    terser(),
    typescript({
      exclude: "node_modules/**",
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
  ],
};
