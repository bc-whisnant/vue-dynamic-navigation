<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <div class="container">
          <b-navbar-nav v-if="this.loggedIn === true">
            <b-nav-item v-for="link in visibleLinks" :key="link.id">
              <a :href="link.linkref">{{ link.id }}</a>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item right>
              <b-button v-if="this.loggedIn === false" size="sm" class="account-btn my-2 my-sm-0" @click="userLogin"><font-awesome-icon icon="sign-in-alt" />&nbsp;&nbsp;Sign In</b-button>
              <b-button v-else size="sm" class="account-btn my-2 my-sm-0" @click="userLogout"><font-awesome-icon icon="sign-out-alt" />&nbsp;&nbsp;Sign Out</b-button>
            </b-nav-item>
          </b-navbar-nav>
        </div>
    </b-navbar> 
</template>

<script>
// import axios
// import axios from 'axios';

export default {
  name: "DynamicNav",
  data: function() {
    return {
      "links": [
        { 
          "id": "Home",
          "linkref": "#",
          "visible": true
        },
        { 
          "id": "Products",
          "linkref": "#products",
          "visible": true
        },
        { 
          "id": "Pricing",
          "linkref": "/pricing/",
          "visible": false
        },
        { 
          "id": "News",
          "linkref": "#news",
          "visible": true
        },
        { 
          "id": "About",
          "linkref": "#about",
          "visible": false
        },
        { 
          "id": "Contact",
          "linkref": "/contact/",
          "visible": true
        }
      ],
      loggedIn: false
    };
  },
  methods: {
    userLogin: function() {
      // console.log("user login attempted");
      // original link: https://api.jsonbin.io/b/5c4a887b6dbfe317d4c49cab
      // axios.get('https://api.jsonbin.io/b/5c4f1b10a3fb18257ac66cae')
      // .then(response => {
      //   console.log('response' + response.data.links)
      //   this.links = (response.data.links)
        this.loggedIn = true;
        //console.log('links' in this.userInfo)
        
      // })
      // .catch (e => {
      //   this.errors.push(e)
      // })
    },
    userLogout: function() {
      this.loggedIn = false
    }
  },
  computed: {
    visibleLinks: function() {
      return this.links.filter(function(link) {
        // console.log(link.visible)
        return link.visible
      })
    }
  }
};
</script>

<style>


</style>


