<template>
    <div>
        <h2>
            {{ review.name }}
        </h2>
        <p class="review-title">
            {{ review.title }}
        </p>
        <star-rating :show-rating="false"
                    :rating="review.rating"
                    :star-size="20"
                    :read-only="true">
        </star-rating>
        <p class="review">
            {{ review.review }}
        </p>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'Review',
    props: {
        review: Object,
    },
    components: {
        StarRating
    }
}
</script>

<style scoped>

div {
    border: 2px solid #9782b9;
    width: 80%;
    margin: 20px auto;
    border-radius: 3px;
    background-color: rgb(245, 229, 208);
    text-align: left;
    padding: 0 15px;
}

h2 {
    font-size: 17px;
    color: teal;
}

p.review-title {
    font-weight: 600;
    font-size: 20px;
}

div.vue-star-rating {
    border: none !important;
    margin-left: -15px;
}

p.review {
    font-size: 15px;
}
</style>