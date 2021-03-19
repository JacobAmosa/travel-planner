<template>
  <div id="app">
    <div id="nav">
      <router-link class="option" to="/">Home</router-link> 
      <router-link class="option" to="/Discounted">Discounted Trips</router-link> 
      <router-link class="option" to="/Trips">Planned Trips: {{this.$root.$data.trips.length}}</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: 'PT Sans', sans-serif;
  text-align: center;
}

#nav {
  display: flex;
  justify-content: flex-end;
  padding-right: 80px;
  background-color: 	#DCDCDC;
  margin-top: -20px;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 40px;
  padding-top: 30px;
  padding-bottom: 15px;
}

.option {
  padding-left: 25px;
  padding-right: 25px;
  font-size: 30px;
  text-decoration: none;
}


</style>
