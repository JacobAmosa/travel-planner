<template>
<div class="wrapper">
    <h1>Cart:</h1>
    <div v-if="this.$root.$data.trips.length == 0">
        <h1>**Your cart is currently empty**</h1>
    </div>
    <div v-if="this.$root.$data.trips.length != 0">
        <div class="cart" v-for="trip in trips" v-bind:key="trip.id">
            <div class="info">
            <h2 class="trips">Location: {{trip.location}}, Airline: {{trip.airline}}, Duration: {{trip.duration}} days</h2>
        </div>
    </div>
    <h1>Total: ${{this.$root.$data.total}}</h1>
    </div>
</div>
</template>

<script>
export default {
    name: 'Trips',
    computed: {
        trips() {
            return this.$root.$data.trips;
        }   
    },
    // method: {
    //     checkout(){
    //         console.log("WORKING");
    //         return this.$root.$data.trips.splice(0, this.$root.$data.trips.length);
    //     }
    // }
}
</script>

<style scoped>
.trips {
    padding-left: 50px;
}

</style>