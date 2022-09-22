// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { createApp  } from 'vue';
import Example from './Example';
import ZkTable from '../src';

const app = createApp(Example)

app.config.productionTip = false;

// Vue.component(ZkTable.name, ZkTable);


/* eslint-disable no-new */
app.mount('#example');
