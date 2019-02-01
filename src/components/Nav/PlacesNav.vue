<template>
<div>
    <b-dropdown id="ddown1" text="Places" class="m-md-2">
      <b-dropdown-item v-for="dropdownLink in this.placesLinks" :key="dropdownLink.id">
       <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-header>TRC</b-dropdown-header>
      <b-dropdown-item v-for="dropdownLink in this.placesTrcLinks" :key="dropdownLink.id">
       <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-header>APS Legacy</b-dropdown-header>
      <b-dropdown-item v-for="dropdownLink in this.placesApsLinks" :key="dropdownLink.id">
       <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
       <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-header>NEEA Legacy</b-dropdown-header>
      <b-dropdown-item v-for="dropdownLink in this.placesNeeaLinks" :key="dropdownLink.id">
       <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
    </b-dropdown>
  </div>
  
</template>

<script>
export default {
  name: 'PlacesNav',
  data() {
    return {
    }
  },
  props: ['placesLinks', 'placesTrcLinks', 'placesApsLinks', 'placesNeeaLinks']
  
}
</script>

<style>

</style>


