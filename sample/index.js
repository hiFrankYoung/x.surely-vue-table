import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import STable from '@surely-vue/table';
import 'ant-design-vue/dist/reset.css';
import '@surely-vue/table/dist/index.less';

import { hackLicenseKey } from '@skit/x.surely-vue-table';
hackLicenseKey(); // 试试注注释这行代码后刷新看看～

import App from './main.vue';
createApp(App).use(Antd).use(STable).mount('#app');
