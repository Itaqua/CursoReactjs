
module.exports = {
    context: __dirname + "/web-app",
    entry: "./app.js",
    output: {
        path: __dirname + "/public/build",
        filename: "bundle.js"
    }
}