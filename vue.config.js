module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/jest-cucumber-test/dist' : '/',
  transpileDependencies: ['vuetify'],
};
