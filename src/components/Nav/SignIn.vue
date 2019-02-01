<template>
  <b-button v-if="this.loggedIn === false" size="sm" class="account-btn my-2 my-sm-0" @click="userLogin">
    <font-awesome-icon icon="sign-in-alt"/>&nbsp;&nbsp;Sign In
  </b-button>
  <b-button v-else size="sm" class="account-btn my-2 my-sm-0" @click="userLogout">
    <font-awesome-icon icon="sign-out-alt"/>&nbsp;&nbsp;Sign Out
  </b-button>
</template>


<script>
export default {
  name: "SignIn",
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    userLogin: function() {
      // console.log("user login attempted");
      this.loggedIn = true
    },
    userLogout: function() {
      this.loggedIn = false
    }
  },
};
</script>

<style>
</style>


