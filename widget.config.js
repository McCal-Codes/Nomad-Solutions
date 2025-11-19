const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'availability-widget': './src/widgets/availability-widget.js',
    'pricing-widget': './src/widgets/pricing-widget.js',
    'rv-card-widget': './src/widgets/rv-card-widget.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/widgets'),
    filename: '[name].js',
    library: {
      name: 'NomadWidget',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
