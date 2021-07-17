<template>
   <form @submit="onSubmit" class="add-form">
    <h3>Write a review</h3>
    <div class="form-control">
      <label>Name</label>
      <input type="text" v-model="name" name="name" placeholder="Name" />
    </div>
    <div class="form-control form-control-check">
      <label>Review Title</label>
      <input type="text" v-model="title" name="title" />
    </div>
    <star-rating :show-rating="false" @rating-selected="setRating" v-model:rating="rating" class="star-rating form-control" :star-size="30" />
    <div class="form-control form-control-check">
      <label>Review</label>
      <textarea class="longInput" v-model="review" name="review" cols="68" rows="10"></textarea>
    </div>
    <input type="submit" value="Submit Review" class="btn btn-block" />
  </form>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'AddReview',
    components: {
        StarRating,
    },
    data() {
      return {
        name: '',
        title: '',
        rating: 0,
        review: '',
        reviews: [],
      }
    },
    methods: {
      async addReview(review) {
            const res = await fetch('http://localhost:3004/reviews', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify(review),
            })

            const data = await res.json()

            this.reviews = [...this.reviews, data]
        },
      onSubmit(e) {
        e.preventDefault()

        if(!this.review) {
          alert('Please fill out the review')
          return
        } else if (!this.name) {
          alert('Please enter a name')
          return
        } else if (!this.title) {
          alert('Please enter a title')
        }

        const newReview = {
          id: Math.floor(Math.random() * 10000),
          name: this.name,
          title: this.title,
          rating: this.rating,
          review: this.review
        }

        console.log(newReview)
        this.addReview(newReview)

        this.name = ''
        this.title = ''
        this.rating = 0
        this.review = ''
      },
      setRating(rating) {
        this.rating = rating;
      }
    }
}
</script>

<style scoped>
form {
  width: 80%;
  margin: 0 auto;
  border: 5px solid #2c3e50;
  background-color: rgb(255, 250, 238);
  border-radius: 3px;
}

label {
  display: block;
  text-align: left;
}

.form-control {
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  vertical-align: top !important;
}

input {
  padding: 2px;
  padding-left: 7px;
}

input[type="text"] {
  font-size: 17px;
}

input[name="name"] {
  width: 35%;
  height: 30px;
}

input[name="title"] {
  width: 75%;
  height: 30px;
}

.longInput {
  width: 98%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 10px;
}

.btn.btn-block {
  padding: 20px;
  font-size: 15px;
  margin-bottom: 20px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: #2c3e50;
  border-style: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}

</style>