<template>
<div>
  <div id="title" >Welcome to the Travel Planner</div>
  <div id="message" >The Travel Planner is a travel planning agency that faciliates every process of organizing your dream vacation.<br>
  We don't want you to be burndened by stressing over all the small details of the your trip so... we do it for you!!
  </div>
  <button class="route" ><router-link class="button" to="/Preplanned"> Take me to the Preplanned Trips</router-link></button>

  <div class="middleText" >
  or <br>
  Create my own trip &#x2193;
  </div>
  <h3 class="question" >Where would you like to travel?</h3>
  <div class="travel-question" >
    <div class="box" >
      <img src="../assets/hawaii.jpg" >
      <button class="button" >Hawaii</button>
    </div>
    <div class="box">
      <img src="../assets/france.jpg" >
      <button class="button">France</button>
    </div>
    <div class="box" >
      <img src="../assets/china.jpg" >
      <button class="button">China</button>

    </div>
    <div class="box" >
      <img src="../assets/newyork.jpg" >
      <button class="button">newyork</button>
  </div>

  </div>

  <h3 class="question" >Choose an airline:</h3>
  <div class="travel-question" >
    <div class="box" >
      <img src="../assets/alaska.png" >
      <button class="button">Alaska Airlines</button>
    </div>
    <div class="box">
      <img src="../assets/delta.jpg" >
      <button class="button">Delta Airlines</button>
    </div>
    <div class="box" >
      <img src="../assets/southwest.png" >
      <button class="button">Southwest Airlines</button>
    </div>
  </div>

  <h3 class="question" >Trip length:</h3>
  <div class="travel-question" >
    <div class="box" >
      <button class="button">4 Days</button>
    </div>
    <div class="box">
      <button class="button">1 week</button>
    </div>
    <div class="box" >
      <button class="button">1 week, 3 days</button>
    </div>
    <div class="box" >
      <button class="button">2 weeks</button>
    </div>
    <div class="box" >
      <button class="button">3 weeks</button>
    </div>
    <div class="box" >
      <button class="button">1 month</button>
    </div>
  </div>
 
 <div class="submit-button" >
  <p>{{location}}</p>
  <button class="submit" >Submit</button> 
 </div>

</div>
</template>

<script>
export default {
  name: 'Home',
setLocation(location) {
  if (location == "hawaii"){
    this.$root.$data.location = "hawaii";
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
  text-align: left;
  padding-left: 600px;
  padding-top: 50px;
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

</style>