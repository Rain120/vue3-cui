import Alert from './src/main.vue';

(<any>Alert).install = function(Vue: any) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
