const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    // 添加请求url前缀方便服务器资源和代理服务器资源区分
    '/api',
    createProxyMiddleware({
      // 代理服务器要转发请求给谁处理（即要请求的服务器地址）
      target: 'http://localhost:5000', 
      // 控制服务器收到的请求头中host的值
      changeOrigin: true,
      // 正则匹配前缀并替换掉，使正确的url发送给服务器
      pathRewrite: {'^/api': ''}
    })
  );
};