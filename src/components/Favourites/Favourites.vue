<template>
  <div class="favourites">
      <div v-for="item in favourites" :key="item.data[0].nasa_id" class="favourites-item">
            <img :src="item.links[0].href" />
            <div class="favourites-description">
              <h3>{{item.data[0].title}}</h3>
              <input type="checkbox" :id="item.data[0].nasa_id">
              <div class="favourites-description-text">
                <p>{{item.data[0].description}}</p>
              </div>
              <label :for="item.data[0].nasa_id">Read more...</label>
            </div>        
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favourites: []
    }  
  },
  mounted() {
    if (localStorage["favourites"]) {
      this.favourites = JSON.parse(localStorage["favourites"]);
      console.log(this.favourites);
    }
  },
}
</script>

<style lang="scss" scoped>
  .favourites {
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    .favourites-item {
      display: flex;
      flex-direction: row;
      margin: 10px 0;
      img {
        width: 30%;
        object-fit: contain;
      }
      .favourites-description {
        margin: 0 20px;
        padding: 0 10px;
        h3 {
          font-family: 'Orbitron', sans-serif;
          color: #fffaea;  
        }
        input[type="checkbox"] {
          display: none;
        }
        input[type="checkbox"]:checked + .favourites-description-text {
          height: auto;
        }
        label {
          order: 1;
          text-decoration: underline;
          font-size: 14px;
          cursor: pointer;
          color: #dddcc6;
        }
        .favourites-description-text {
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
    }
  }
</style>