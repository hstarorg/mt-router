import { COMPONENTS } from './components';

const install = Vue => {
  if (install.installed) return;

  // Register components
  COMPONENTS.forEach(comp => {
    Vue.component(comp.name, comp);
  });

  install.installed = true;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  version: process.env.LIB_VERSION
};
