<template>
<div>
  <div>
    <div id="outil" class="playg">
      <div class="head-play">
          <router-link to="/playground"><span class="navLink">PlayGround</span></router-link>
      </div>
      <div class="contenue-commu">
      </div>
    </div>
    <br>
    <div id="communication" class="communicat">
      <div class="head-commu">
          <router-link to="/community"><span class="navLink">Community</span></router-link>
      </div>
      <div class="contenue-commu">
      </div>
    </div>
  </div>

</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.outil{

  background-color: #fff;
	border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25);
	position: relative;
	width: 1200px;
	max-width: 70%;
	min-height: 300px;
  margin-left: 3rem;
  column-count: 3;
  column-gap: 10px;
  column-rule: 40px solid rebeccapurple;
}

</style>
