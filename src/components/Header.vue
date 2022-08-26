<template>
  <header class="header"  v-if="toActivateHeader">

    <div id="menu-btn" @click="toggleNav">BG</div>

    <div class="logo">
      <router-link to="/"><span class="navLink">ElectLab</span></router-link>
    </div>

    <nav class="navbar" :class="{ active: mobile }">
      <router-link to="/playground"><span class="navLink">PlayGround</span></router-link>
      <router-link to="/community"><span class="navLink">Community</span></router-link>
      <router-link to="/gerer"><span class="navLink">Gerer vos projets</span></router-link>
      <router-link to="/aide"><span class="navLink">Aide</span></router-link>

    </nav>

    <router-link to="/connexion"><span class="navLink btn">Connexion</span></router-link>

  </header>
</template>


<script>
export default {
  name: "HeaderComp",
  data() {
    return {
      mobile: false,
      toActivateHeader: Boolean
    }
  },
  updated() {
    
    this.$watch(this.$route.path, function(newValue){
        if (newValue == "/gerer") console.log("True")
      }
    )
  },
  methods: {
    toggleNav() {
      if (this.mobile == false) {
        this.mobile = true
      }
      else {
        this.mobile = false
      }
    },

  },
}
</script>


<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #255a85;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: .8rem 9%;
  margin-bottom: 2rem;
}

.header .navbar span.navLink {
  font-size: 1.7rem;
  color: #fea;
  display: inline-block;
  margin: 0 1rem;
  padding: .5rem 1rem;
  border-radius: .7rem;
  font-weight: 500;
}

.header .navbar span.navLink .missions {
  display: none;
  color: #fbfef9ff;
  font-size: 2.2rem;
}

.header .navbar span.navLink:hover {
  background: #3b5ea7;
  color: gold;
}

.header .navbar .router-link-exact-active.router-link-active {
  font-size: 1.7rem;
  display: inline-block;
  margin: 0 1rem;
  padding: .5rem 1rem;
  border-radius: .7rem;
  font-weight: 500;
  background: #3b5ea7;
}

.header .navbar .router-link-exact-active.router-link-active span {
  color: goldenrod;

}

.header .btn {
  margin-top: 0;
}

.logo {
  text-transform: none;
  font-size: 2.5rem;
  font-weight: bolder;
}

.logo span.navLink {
  color: #fbfef9;
  padding-right: .5rem;
}

#menu-btn {
  font-size: 2.5rem;
  color: #fbfef9ff;
  cursor: pointer;
  display: none;
}


@media (max-width: 1174px) {

  .header {
    padding: 1rem 2rem;
  }

  .header .navbar span.navLink {
    margin: 0 .7rem;
    padding: .4rem .7rem;
  }
}

@media (max-width: 991px) {

  .header {
    padding: 1rem 2rem;
  }

  .header .navbar span.navLink {
    margin: 0 .3rem;
    padding: .3rem .3rem;
  }
}


@media (max-width: 768px) {
  * {
    -webkit-transition: none;
    transition: none;
  }

  #menu-btn {
    display: inline-block;
  }

  .header .navbar {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    background: #29f;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }

  .header .navbar.active {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .header .navbar span.navLink {
    margin: 2rem;
    font-size: 2rem;
    display: block;
  }

  .header .navbar .router-link-exact-active.router-link-active {
    font-size: 1.7rem;
    display: block;
    margin: .3rem 1rem;
    padding: .5rem auto;
  }
}
</style>