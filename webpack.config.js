var path = require('path');


module.exports = {
    context: __dirname + "/web-app",
    entry: "./app.js",
    output: {
        path: __dirname + "/public/build",
        filename: "bundle.js"
    },
    resolveLoader: {
        modulesDirectories: ['node_modules']
    },
    resolve: {
        root: path.resolve(__dirname, "node_modules")
        //extensions: ['','.js','.jsx']  //,'.cjsx','.coffee'
    },
    module: {
      loaders: [        
        { 
          test: /(\.js$)|(\.jsx$)/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        }
      ]
    }
}
/*
        { test: /\.cjsx$/, loaders: ['react-hot', 'coffee-loader', 'cjsx-loader']}
        { test: /\.coffee$/, loader: 'coffee-loader' }
        */