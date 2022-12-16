// 打包ts
import typescript from "rollup-plugin-typescript2";
// sourcemap
import sourceMaps from "rollup-plugin-sourcemaps";
// 清除注释
import clean from "rollup-plugin-cleanup"
// 压缩代码
// import {terser} from "rollup-plugin-terser"
// 清除log
import  strip from '@rollup/plugin-strip'

export default {
  input: 'src/main.ts',
  plugins:[
    // terser(),
    typescript({
        // "clean": true,
        // "verbosity": 3,
        // "abortOnError": false,
        // "check": true,
        // "cacheRoot": "{cwd}/.rpt2_cache",
        // "include": [
        //     "*.ts+(|x)",
        //     "**/*.ts+(|x)"
        // ],
        // "exclude": [
        //     "*.d.ts",
        //     "**/*.d.ts"
        // ],
        // "rollupCommonJSResolveHack": false,
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
