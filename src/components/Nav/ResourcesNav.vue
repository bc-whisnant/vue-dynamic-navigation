<template>
  <div>
    <b-dropdown id="ddown1" text="Resources" class="m-md-2">
      <b-dropdown-item v-for="dropdownLink in this.resourcesLinks" :key="dropdownLink.id">
        <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "ResourcesNav",
  data() {
    return {
      
    };
  },
  props: ['resourcesLinks']
};
</script>

<style>

</style>


