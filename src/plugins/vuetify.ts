// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#62CFBB',
        success: '#009688',
        warning: '#FBD341',
        danger: '#F76D6D',
      },
      dark: {
        primary: '#62CFBB',
        success: '#009688',
        warning: '#FBD341',
        danger: '#F76D6D',
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
