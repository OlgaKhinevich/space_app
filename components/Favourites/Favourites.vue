<template>
  <div class="favourites">
      <div v-for="(item,index) in favourites" :key="index" :data-id="index" class="favourites__item">
            <img :src="item.links[0].href" />
            <div class="favourites__description">
              <h3>{{item.data[0].title}}</h3>
              <div class="favourites__description_text">
                <p>{{item.data[0].description}}</p>
              </div>
            </div>
            <i class="fas fa-trash" @click="removeFromFavourites"></i>      
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
    } else {
      console.log('Nothing here');
    }
  },
  methods: {
    removeFromFavourites(e) {
      const itemId = e.target.closest(".favourites__item").dataset.id;
      this.$store.commit('results/changeIsFavourite', itemId);
      this.favourites.splice(itemId, 1);
      localStorage["favourites"] = JSON.stringify(this.favourites);
    }
  }
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
    .favourites__item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 15px 0;
      img {
        width: 30%;
        object-fit: contain;
      }
      i {
        color: #dddcc6;
        margin-right: 20px;
      }
      .favourites__description {
        margin: 0 20px;
        padding: 0 10px;
        width: 65%;
        h3 {
          font-family: 'Orbitron', sans-serif;
          color: #fffaea; 
          margin-bottom: 10px; 
        }
        .favourites__description_text {
          p {
            font-family: 'Lato', sans-serif;
            color: #dddcc6;
            line-height: 1.5;
            font-weight: 400; 
          }
        }
      }
    }
  }
</style>