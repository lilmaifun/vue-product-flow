<template>
    <Reviews :reviews="reviews"/>
    <br>
    <router-link to="/">Go Back</router-link>
</template>

<script>
import Reviews from '../components/Reviews.vue'

export default {
    name: 'ViewReviews',
    components: {
        Reviews
    },
    methods: {
        async fetchReviews() {
            const res = await fetch('http://localhost:5000/reviews')

            const data = await res.json()

            return data
        },
    },
    async created() {
        this.reviews = await this.fetchReviews()
    },
    data() {
        return {
            reviews: [],
        }
    }
}
</script>

<style scoped>
div {
    border: 4px solid #2c3e50;
    border-radius: 3px;
    background-color: rgb(231, 215, 236);
    width: 80%;
    margin: auto;
}
</style>