<template>
<div class="reviews-container">
    <div :key="review.id" v-for="review in reviews">
        <Review :review="review" />
    </div>
</div>
</template>

<script>
import Review from './Review.vue'

export default {
    name: 'Reviews',
    props: {
        reviews: Array
    },
    components: {
        Review
    }
}
</script>

<style scoped>
div.reviews-container {
    background-color: rgb(231, 220, 240);
}
</style>