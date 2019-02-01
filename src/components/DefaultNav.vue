<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <div class="container">
      <b-navbar-nav>
        <b-nav-item><CompaniesNav :companiesLinks="this.companiesLinks"/></b-nav-item>
        <b-nav-item><PlacesNav :placesLinks="this.placesLinks" :placesTrcLinks="this.placesTrcLinks" :placesApsLinks="this.placesApsLinks" :placesNeeaLinks="this.placesNeeaLinks"/></b-nav-item>
        <b-nav-item><TasksNav :tasksAddLinks="this.tasksAddLinks" :tasksTrcLinks="this.tasksTrcLinks" /></b-nav-item>
        <b-nav-item><ReportsNav :reportsLinks="this.reportsLinks" :reportsPrintingLinks="this.reportsPrintingLinks" :reportsExtraLinks="this.reportsExtraLinks" :reportsSearchDbLinks="this.reportsSearchDbLinks" /></b-nav-item>
        <b-nav-item><ResourcesNav :resourcesLinks="this.resourcesLinks" /></b-nav-item>
        <b-nav-item><SupportNav :supportLinks="this.supportLinks" :supportAmazonConsoleLinks="this.supportAmazonConsoleLinks" :supportCpuLoadingLinks="this.supportCpuLoadingLinks" :supportLogoutLink="this.supportLogoutLink" /></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
          <SignIn />
        </b-nav-item>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
import CompaniesNav from './Nav/CompaniesNav.vue'
import PlacesNav from './Nav/PlacesNav.vue'
import TasksNav from './Nav/TasksNav.vue'
import ReportsNav from './Nav/ReportsNav.vue'
import ResourcesNav from './Nav/ResourcesNav.vue'
import SupportNav from './Nav/SupportNav.vue'

import SignIn from './Nav/SignIn.vue'

import axios from 'axios'

// json-link: https://api.jsonbin.io/b/5c525685a3fb18257ac9aae4
// updated json link: https://api.jsonbin.io/b/5c537bb7a3fb18257acb1a3a


export default {
  name: 'DefaultNav',
  data: function() {
    return {
      links: [],
      companiesLinks: [],
      tasksAddLinks: [],
      tasksTrcLinks: [],
      placesLinks: [],
      placesTrcLinks: [],
      placesApsLinks: [],
      placesNeeaLinks: [],
      reportsLinks: [],
      reportsPrintingLinks: [], 
      reportsExtraLinks: [],
      reportsSearchDbLinks: [],
      supportLinks: [],
      supportAmazonConsoleLinks: [], 
      supportCpuLoadingLinks: [], 
      supportLogoutLink: [],
      resourcesLinks: []


    }
  },
  mounted() {
    axios.get('https://api.jsonbin.io/b/5c537bb7a3fb18257acb1a3a')
    .then(response => {
      this.links = response.data
      this.companiesLinks = this.links.companiesLinks
      this.tasksAddLinks = this.links.tasksAddLinks
      this.tasksTrcLinks = this.links.tasksTrcLinks
      this.placesLinks = this.links.placesLinks
      this.placesTrcLinks = this.links.placesTrcLinks
      this.placesApsLinks = this.links.placesApsLinks
      this.placesNeeaLinks = this.links.placesNeeaLinks
      this.reportsLinks = this.links.reportsLinks
      this.reportsPrintingLinks = this.links.reportsPrintingLinks
      this.reportsExtraLinks = this.links.reportsExtraLinks
      this.reportsSearchDbLinks = this.links.reportsSearchDbLinks
      this.supportLinks = this.links.supportLinks
      this.supportAmazonConsoleLinks = this.links.supportAmazonConsoleLinks
      this.supportCpuLoadingLinks = this.links.supportCpuLoadingLinks
      this.supportLogoutLink = this.links.supportLogoutLink
      this.resourcesLinks = this.links.resourcesLinks
      console.log(this.links)
      console.log(this.links.companiesLinks)
      })
    .catch (e => {
      this.errors.push(e)
    })
  },
  components: {
    CompaniesNav,
    PlacesNav,
    TasksNav,
    ReportsNav,
    ResourcesNav,
    SupportNav,
    SignIn
  }
}
</script>
<style>
  #ddown1 > button,
  .dropdown-item {
    font-size: 14px;
  }

  #ddown1 {
    margin: 0 !important;
  } 

  a,
  a:hover {
    color: #9d9d9d;
     text-decoration: none;
  }

  .dropdown-item a {
    color: #333;
  }
 
</style>


