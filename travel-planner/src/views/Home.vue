<template>
<div>
  <div id="title" >Welcome to the Travel Planner</div>
  <div id="message" >The Travel Planner is a travel planning agency that faciliates every process of organizing your dream vacation.<br>
  We don't want you to be burndened by stressing over all the small details of the your trip so... we do it for you!!
  </div>
  <button class="route" ><router-link class="button" to="/Discounted"> Take me to the discounted Trips</router-link></button>

  <div class="middleText" >
  or <br>
  Create my own trip &#x2193;
  </div>


  <h3 class="question" >Where would you like to travel?</h3>
  <div class="travel-question 1" >
    <div class="box" >
      <img src="../assets/hawaii.jpg" >
      <button class="button" v-on:click="setLocation('hawaii')" >Hawaii</button>
    </div>
    <div class="box">
      <img src="../assets/france.jpg" >
      <button class="button" v-on:click="setLocation('france')">France</button>
    </div>
    <div class="box" >
      <img src="../assets/china.jpg" >
      <button class="button" v-on:click="setLocation('china')">China</button>
    </div>
  </div>

  <h3 class="question" >Choose an airline:</h3>
  <div class="travel-question 2" >
    <div class="box">
      <img src="../assets/delta.jpg" >
      <button class="button" v-on:click="setAirline('delta')">Delta Airlines</button>
    </div>
    <div class="box" >
      <img src="../assets/southwest.png" >
      <button class="button" v-on:click="setAirline('southwest')">Southwest</button>
    </div>
  </div>

  <h3 class="question" >Trip length:</h3>
  <div class="travel-question 3" >
    <div class="box" >
      <button class="button" v-on:click="setDuration(4)">4 Days</button>
    </div>
    <div class="box">
      <button class="button" v-on:click="setDuration(7)">1 week</button>
    </div>
    <div class="box" >
      <button class="button" v-on:click="setDuration(10)">1.5 weeks</button>
    </div>
    <div class="box" >
      <button class="button" v-on:click="setDuration(14)">2 weeks</button>
    </div>
    <div class="box" >
      <button class="button" v-on:click="setDuration(21)">3 weeks</button>
    </div>
    <div class="box" >
      <button class="button" v-on:click="setDuration(30)">1 month</button>
    </div>
  </div>
 
 <div class="submit-button" >
  <p class="finalTrip" v-if="(this.$root.$data.location != '') && (this.$root.$data.airline != '') && (this.$root.$data.duration != 0) && (this.$root.$data.cost != 0)">
    ***Traveling to {{this.$root.$data.location}} with {{this.$root.$data.airline}} for {{this.$root.$data.duration}} days***<br> 
    Total = ${{this.$root.$data.cost}}<br>
    Click Submit to add trip to cart.
    </p>
  <button class="submit" v-on:click="createTrip()">Submit</button> 
 </div>

</div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
  setLocation(location) {
    if (location == "hawaii"){
      this.$root.$data.location = "Hawaii";
      }
    else if (location == "france"){
      this.$root.$data.location = "France";
      }
    else if (location == "china"){
      this.$root.$data.location = "China";
      }  
    },
  setAirline(airline) {
    if (airline == "delta"){
      this.$root.$data.airline = "Delta Airlines";
      }
    else if (airline == "southwest"){
      this.$root.$data.airline = "Southwest Airlines";
      } 
    },
  setDuration(duration) {
    if (duration == 4){
      this.$root.$data.duration = 4;
      this.$root.$data.cost = 500;
      }
    else if (duration == 7){
      this.$root.$data.duration = 7;
      this.$root.$data.cost = 1200;
      }
    else if (duration == 10){
      this.$root.$data.duration = 10;
      this.$root.$data.cost = 1600;
      }
    else if (duration == 14){
      this.$root.$data.duration = 14;
      this.$root.$data.cost = 2000;
      }
    else if (duration == 21){
      this.$root.$data.duration = 21;
      this.$root.$data.cost = 2500;
      }
    else if (duration == 30){
      this.$root.$data.duration = 30;
      this.$root.$data.cost = 5000;
      }  
    },
  createTrip (){
    this.$root.$data.total += this.$root.$data.cost;
    this.$root.$data.trips.push({location: this.$root.$data.location, airline: this.$root.$data.airline, duration: this.$root.$data.duration, cost: this.$root.$data.cost});
    this.$root.$data.duration = 0;
    this.$root.$data.airline = '';
    this.$root.$data.location = '';
    this.$root.$data.cost = 0;
  }     
  }
}
</script>

<style scoped>
#title {
  font-size: 60px;
}

#message {
  font-size: 20px;
}

.route {
  margin-top: 50px;
  padding: 15px;
  font-size: 20px;
  text-decoration: none;
}

.middleText {
  padding-top: 60px;
  font-size: 35px;
}

.question {
  text-align: center;
  font-size: 30px;
  text-decoration: underline;
}

img {
  width: 400px;
  height: 400px;
}

.travel-question {
  display: flex;
  justify-content: center;  
}

.button {
  width: 100px;
  margin-top: 15px;

}

.box {
  display: flex;
  flex-direction:column;
}

.submit-button {
margin-top: 90px;
margin-bottom: 150px;
}

.submit {
  padding: 20px 200px 20px 200px;
  font-size: 30px;
}

.finalTrip {
  color: red;
  font-size: 25px;
}



</style>