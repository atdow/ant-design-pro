/*
 * @Author: atdow
 * @Date: 2021-04-14 11:31:07
 * @LastEditors: null
 * @LastEditTime: 2021-04-14 13:45:57
 * @Description: file content
 */
export default {
  dev: {
    '/api/': {
      // target: 'https://preview.pro.ant.design',
      target: 'https://proapi.azurewebsites.net',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
