import Vue from 'vue'
import Router from 'vue-router'

import Testing from '../static/testing.html'
import Builder from '../static/company/builder.html'
import Eep from '../static/company/eep.html'
import Hvac from '../static/company/hvac.html'
import Provider from '../static/company/provider.html'
import Qa from '../static/company/qa.html'
import Rater from '../static/company/rater.html'
import Utility from '../static/company/utility.html'
import General from '../static/company/general.html'

import List from '../static/epa_registry/list.html'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/testing',
      name: 'testing',
      component: {template: Testing}
    },
    {
      path: '/company/builder',
      name: 'builder',
      component: {template: Builder}
    },
    {
      path: '/company/eep',
      name: 'eep',
      component: {template: Eep}
    },
    {
      path: '/company/hvac',
      name: 'hvac',
      component: {template: Hvac}
    },
    {
      path: '/company/provider',
      name: 'provider',
      component: {template: Provider}
    },
    {
      path: '/company/qa',
      name: 'qa',
      component: {template: Qa}
    },
    {
      path: '/company/rater',
      name: 'rater',
      component: {template: Rater}
    },
    {
      path: '/company/utility',
      name: 'utility',
      component: {template: Utility}
    },
    {
      path: '/company/general',
      name: 'general',
      component: {template: General}
    },
    {
      path: '/epa_registry/list',
      name: 'list',
      component: {template: List}
    }
  ]
})
