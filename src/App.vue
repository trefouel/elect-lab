<template>

<div>
  
  <HeaderComp />

  <div class="body">
    <router-view />
  </div>
</div>
</template>

<script>
import HeaderComp from '@/components/Header.vue'



export default {
  name: 'App',
  components: {
    HeaderComp
  }

}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap");
* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  -webkit-transition: all .2s ease-in;
  transition: all .2s linear;
}

/* SCSS HEX */
/* SCSS HEX */
html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 9rem;
}

html::-webkit-scrollbar {
  width: 1rem;
}

html::-webkit-scrollbar-track {
  background: #dff;
}

html::-webkit-scrollbar-thumb {
  background: #29d9d5;
  border-radius: 5rem;
}

body {
  background: #fbfef9ff;
  overflow: hidden;
}


.btn {
  margin-top: 1rem;
  display: inline-block;
  padding: 1rem 3rem;
  font-size: 1.7rem;
  color: #fefefe;
  font-weight: bold;
  border: 0.2rem solid #16bac5;
  border-radius: 5rem;
  cursor: pointer;
  background: none;
}

.btn:hover {
  background: #37a;
  color: #fff;
}
.body {
  margin: 0 auto;
  margin-top: 9rem;
}


@media (max-width: 1174px) {
  body {
    overflow-y: hidden;
  }
}

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }
  section {
    padding: 3rem 2rem;
  }
  .btn, .input-btn {
    background-color: #16bac5;
    color: #fbfef9ff;
  }
}

@media (max-width: 768px) {

  .home {
    margin-top: 10rem;
  }
  .home .content span {
    font-size: 8vw;
  }
  .home .content h3 {
    font-size: 9vw;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
</style>
