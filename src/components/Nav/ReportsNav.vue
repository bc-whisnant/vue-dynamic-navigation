<template>
<div>
    <b-dropdown id="ddown1" text="Reports" class="m-md-2">
      <b-dropdown-item v-for="dropdownLink in this.reportsLinks" :key="dropdownLink.id">
        <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-header>Printing</b-dropdown-header>
      <b-dropdown-item v-for="dropdownLink in this.reportsPrintingLinks" :key="dropdownLink.id">
        <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item v-for="dropdownLink in this.reportsExtraLinks" :key="dropdownLink.id">
        <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item v-for="dropdownLink in this.reportsSearchDbLinks" :key="dropdownLink.id">
        <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
    </b-dropdown>
  </div>
  
</template>

<script>
export default {
  name: 'ReportsNav',
  data() {
    return {
      
    }
  },
  props: ['reportsLinks', 'reportsPrintingLinks', 'reportsExtraLinks', 'reportsSearchDbLinks']
}
</script>

