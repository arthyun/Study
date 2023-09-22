const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    }),
  );
};

// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   //   const baseUrl = process.env.REACT_APP_API_PROXY;
//   const baseUrl = "http://localhost:5000";
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: baseUrl,
//       pathRewrite: {
//         "^/api": "",
//       },
//       changeOrigin: true,
//       withCredentials: true,
//     }),
//   );
// };
