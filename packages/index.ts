import Alert from './alert';

const components = [
  Alert,
]

const install: any = function (Vue: any) {
  if (install.installed) {
    return;
  }
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && (<any>window).Vue) {
  install((<any>window).Vue);
}

export default {
  install,
  Alert,
}
