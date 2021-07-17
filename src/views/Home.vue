<template>
<div class="container">
    <div class="links">
        <router-link to="/createreview">Create Review</router-link>
        <br>
        <router-link to="/viewreviews">View Reviews</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped>
div.container {
    border: 4px solid #2c3e50;
    border-radius: 3px;
    background-color: rgb(231, 215, 236);
    width: 400px;
    margin: auto;
    height: 100px;
    text-align: center;
}

div.links {
    margin-top: 25px;
}

a {
    color: teal;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: 500;
}

</style>