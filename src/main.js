import Vue from 'vue'
import App from './App.vue'
import router from './router'

import m_transactions from './mock_transacts'
import m_categories from './mock_categories'
import m_users from './mock_users'
import m_months from './months'

let data = {
  transactions: m_transactions,
  categories: m_categories,
  users: m_users,
  months: m_months
}

Vue.config.productionTip = false

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
