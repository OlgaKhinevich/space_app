<template>
  <div class="results">
        <div v-for="item in results" :key="item.data[0].nasa_id" :data-id="item.data[0].nasa_id" class="results__item">
            <img :src="item.links[0].href" />
            <div class="result__description">
              <h3>{{item.data[0].title}}</h3>
              <div class="result__description_text">
              <p v-html="item.data[0].description"></p>
              </div>
              <div class="button" @click="addToFavourites(item)">
                <i class="fas fa-star"></i> 
                {{ item.inFavourites ? ' Added' : 'Add to favourites'}}
              </div>
            </div>        
        </div>
  </div>
</template>

<script>
import {getFavourites, wrapWithFavourites} from '../../static/favourites.js';

export default {
  data: function(){
    return {

    };
  },    
  methods: {
    addToFavourites(favouriteItem) {
      const favourites = getFavourites();
      if(!favourites.some(item => item.data[0].nasa_id === favouriteItem.data[0].nasa_id)) {
        favourites.push(favouriteItem);
        localStorage["favourites"] = JSON.stringify(favourites);
        this.$store.commit('results/setResults', wrapWithFavourites(this.results));
      } 
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
  overflow-x: hidden;
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