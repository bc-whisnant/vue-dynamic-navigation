<template>
  <div id="app">
    <DefaultNav />
    <router-view/>
  </div>
</template>

<script>
import DefaultNav from './components/DefaultNav.vue'


export default {
  name: 'app',
  components: {
    DefaultNav
  },
  data: function() {
    return {
      loggedIn: false,
    }
  },
  methods: {
    
  }
}
</script>

<style>
 nav {
    height: 50px;
  }

  /* .nav-item{
    padding: 10px;
  } */
  .navbar {
    padding: 0 !important;
  }
  .container {
    font-size: 14px;
  }

  .account-btn {
      color: #333 !important;
      background-color: #fff !important;
      border-color: #ccc !important;
  }

  .dropdown > button.btn-secondary {
    background-color: #343a40;
    border-color: #343a40;
    color: #9d9d9d;
  }

  .dropdown > button.btn-secondary:hover {
    color: white;
  }

</style>
