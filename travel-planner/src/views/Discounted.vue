<template>
<div>
    <h1>Dicsounted Trips of the month!</h1>
    <div class="discount" >
        <p class="location">2 week trip to Bangkok, Thailand</p>
        <img class="thailand" src="../assets/thailand.jpeg" alt="">
        <p class="info" >Airline: Delta</p>
        <p>Original cost</p>
        <p class="oldCost">$2500</p>
        <p class="newCost"> now only $1700! <button v-on:click="addTrip(1)" >Add to cart</button> </p>
    </div>

    <div class="discount" >
        <p class="location">1 month trip to Kingston, Jamaica</p>
        <img class="jamaica" src="../assets/jamaica.jpeg" alt="">
        <p class="info" >Airline: Southwest</p>
        <p>Original cost</p>
        <p class="oldCost">$5000</p>
        <p class="newDiscount" > now only $3900! <button v-on:click="addTrip(2)" >Add to cart</button> </p>
    </div>
</div>
</template>

<script>
export default{
    name: 'Discounted',
    methods: {
        addTrip(num){
            if (num == 1){
                this.$root.$data.total += 1700;
                this.$root.$data.trips.push({location: 'Thailand', airline: 'Delta', duration: 14, cost: 1700});
            }
            else if (num == 2){
                this.$root.$data.total += 3900;
                this.$root.$data.trips.push({location: 'Jamaica', airline: 'Southwest', duration: 30, cost: 3900});
            }
        }
    }
}
</script>

<style scoped>
    .oldCost{
        text-decoration: line-through;
    }
    .newCost {
        padding-bottom: 40px;
        border-bottom: 3px solid black;
    }
    .newDiscount {
        padding-bottom: 50px;
    }
    .jamaica {
        width: 800px;
    }
    .thailand {
        height: 550px;
    }

</style>