<template>
<div>
    <b-dropdown id="ddown1" text="Tasks" class="m-md-2">
      <b-dropdown-header>Add</b-dropdown-header>
      <b-dropdown-item v-for="dropdownLink in this.tasksAddLinks" :key="dropdownLink.id">
       <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-header>TRC</b-dropdown-header>
      <b-dropdown-item v-for="dropdownLink in this.tasksTrcLinks" :key="dropdownLink.id">
       <router-link :to="dropdownLink.linkref">{{ dropdownLink.name }}</router-link>
      </b-dropdown-item>
    </b-dropdown>
  </div>
  
</template>

<script>
export default {
  name: 'TasksNav',
  data() {
    return {
      
    }
  },
  props: ['tasksAddLinks', 'tasksTrcLinks']
  
}
</script>

<style>

</style>


