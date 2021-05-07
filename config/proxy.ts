/*
 * @Author: atdow
 * @Date: 2021-04-14 11:31:07
 * @LastEditors: null
 * @LastEditTime: 2021-05-07 11:32:50
 * @Description: file content
 */
export default {
  dev: {
    '/api/': {
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
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
