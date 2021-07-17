<template>
    <AddReview />
    <br>
    <router-link to="/">Go Back</router-link>
</template>

<script>
import AddReview from '../components/AddReview.vue'

export default {
    name: 'CreateReview',
    components: {
        AddReview,
    }
}
</script>