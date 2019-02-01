<template>
<div>
    <b-dropdown id="ddown1" text="Support" class="m-md-2">
      <b-dropdown-item v-for="dropdownLink in this.supportLinks" :key="dropdownLink.id">
        <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-header>Amazon Console</b-dropdown-header>
      <b-dropdown-item v-for="dropdownLink in this.supportAmazonConsoleLinks" :key="dropdownLink.id">
        <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-header>CPU Loading</b-dropdown-header>
      <b-dropdown-item v-for="dropdownLink in this.supportCpuLoadingLinks" :key="dropdownLink.id">
        <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
       <b-dropdown-divider></b-dropdown-divider>
     <b-dropdown-item v-for="dropdownLink in this.supportLogoutLink" :key="dropdownLink.id">
        <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
    </b-dropdown>
  </div>
  
</template>

<script>
export default {
  name: 'SupportNav',
  data() {
    return {
    }
  },
  props: ['supportLinks', 'supportAmazonConsoleLinks', 'supportCpuLoadingLinks', 'supportLogoutLink']
  
}
</script>

<style>

</style>


