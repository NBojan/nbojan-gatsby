require("./src/assets/css/index.css");
const React = require("react")
const Layout = require("./src/components/layout/layout").default;
const { AppContextProvider } = require("./src/assets/context/context");

exports.wrapRootElement = ({ element }) => {
  return <AppContextProvider>{element}</AppContextProvider>
}
exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}