var getConfig = require('hjs-webpack')
var WebpackNotifierPlugin = require('webpack-notifier')

config = getConfig({
  // entry point for the app
  in: 'web-app/app.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'public/build',

  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it 
  // false by default
  clearBeforeBuild: true
});

config.resolve.extensions.push('.cjsx');
config.resolve.extensions.push('.coffee');
config.module.loaders.push({ test: /\.cjsx$/, loader: 'react-hot!coffee-loader!cjsx-loader'});
config.module.loaders.push({ test: /\.coffee$/, loader: 'coffee-loader' });
config.plugins.push(new WebpackNotifierPlugin());

module.exports = config