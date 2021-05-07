/*
 * @Author: atdow
 * @Date: 2021-04-14 11:31:07
 * @LastEditors: null
 * @LastEditTime: 2021-05-07 13:41:48
 * @Description: file content
 */
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['react-dev-inspector/plugins/umi/react-inspector'],
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  webpack5: {},
});
