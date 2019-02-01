<template>
  <div>
    <b-dropdown id="ddown1" text="Companies" class="m-md-2">
      <b-dropdown-item v-for="dropdownLink in this.companiesLinks" :key="dropdownLink.id">
        <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "CompaniesNav",
  data() {
    return {
      
    };
  },
  props: ['companiesLinks']
};
</script>

<style>
</style>


