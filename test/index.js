import Vue from 'vue'

Vue.config.productionTip = false;
Vue.config.devtools = false;

const testsContext = require.context('./specs', true, /\.spec\.js$/)
testsContext.keys().forEach(testsContext)

const srcContext = require.context('../src', true, /[^app]\.js$/)
srcContext.keys().forEach(srcContext)
