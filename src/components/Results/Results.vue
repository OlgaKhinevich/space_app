<template>
  <div class="results">
        <div v-for="item in results" :key="item.data[0].nasa_id" :data-id="item.data[0].nasa_id" class="results-item">
            <img :src="item.links[0].href" />
            <div class="result-description">
              <h3>{{item.data[0].title}}</h3>
              <input type="checkbox" :id="item.data[0].nasa_id">
              <div class="result-description-text">
              <p>{{item.data[0].description}}</p>
              </div>
              <label :for="item.data[0].nasa_id">Read more...</label>
              <div class="button" @click="addToFavourites">
                <i class="fas fa-star">  Add to favourites</i>
              </div>
            </div>        
        </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {default: []}
  },
  mounted() {
    if (!localStorage["favourites"]) {
      localStorage["favourites"] = "[]";
    }
  },
  methods: {
    addToFavourites(e) {
          const itemId = e.target.closest(".results-item").dataset.id;
          let favouriteItem = this.results.find((el) =>  el.data[0].nasa_id === itemId); 
          let mass = JSON.parse(localStorage["favourites"]);
          mass.push(favouriteItem); 
          localStorage["favourites"] = JSON.stringify(mass);
          //люблю тебя) буду оставлять тебе любовные пометки в коде и прививать любовь к коду ахах)
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
  .results-item {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    img {
      width: 30%;
      object-fit: contain;
    }
    .result-description {
      margin: 0 20px;
      padding: 0 10px;
      h3 {
        font-family: 'Orbitron', sans-serif;
        color: #fffaea;  
      }
      input[type="checkbox"] {
        display: none;
      }
      input[type="checkbox"]:checked + .result-description-text {
        height: auto;
      }
      label {
        order: 1;
        text-decoration: underline;
        font-size: 14px;
        cursor: pointer;
        color: #dddcc6;
      }
      .result-description-text {
        height: 24px;
          overflow: hidden;
          order: 0;
        p {
          font-family: 'Lato', sans-serif;
          color: #dddcc6;
          font-weight: 400; 
        }
      }
    }
    .button {
      height: 30px;
      width: 150px;
      background-color: grey;
      margin-top: 20px;
      line-height: 30px;
      text-align: center;
      border-radius: 3px;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      cursor: pointer;
    }
  }
}
</style>