<template>
  <div class="results">
        <div v-for="item in results" :key="item.data[0].nasa_id" :data-id="item.data[0].nasa_id" class="results__item">
            <img :src="item.links[0].href" />
            <div class="result__description">
              <h3>{{item.data[0].title}}</h3>
              <div class="result__description_text">
              <p>{{item.data[0].description}}</p>
              </div>
              <div class="button" @click="addToFavourites">
                <i class="fas fa-star"></i> 
                {{ item.isFavourite ? ' Added' : 'Add to favourites'}}
              </div>
            </div>        
        </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!localStorage["favourites"]) {
      localStorage["favourites"] = "[]";
    } 
  },
  methods: {
    addToFavourites(e) {
      const itemId = e.target.closest(".results__item").dataset.id;
      let favouriteItem = this.results.find((el) => el.data[0].nasa_id === itemId);
      let mass = JSON.parse(localStorage["favourites"]);
      if(!mass.some(item => item.data[0].nasa_id === itemId)) {
        this.$store.commit('results/changeIsFavourite', itemId);
        mass.push(favouriteItem);
      } 
      localStorage["favourites"] = JSON.stringify(mass);
    }
  },
  computed: {
    results() {
      return this.$store.state.results.results;
    }
  }  
}
</script>

<style lang="scss" scoped>
.results {
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  overflow-y: scroll;
  .results__item {
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    img {
      width: 30%;
      object-fit: contain;
    }
    .result__description {
      margin: 0 20px;
      padding: 0 10px;
      h3 {
        font-family: $second-font;
        color: $first-color;  
      }
      .result__description_text {
        p {
          font-family: $first-font;
          color: $second-color;
          font-weight: 400; 
          margin-top: 10px;
          line-height: 1.5;
        }
      }
    }
    .button {
      height: 38px;
      width: 160px;
      border: 2px solid $first-color;
      background-color: none;
      font-family: $first-font; 
      font-weight: 500; 
      color: $first-color;
      border-radius: 5px;
      margin-top: 20px;
      line-height: 38px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>