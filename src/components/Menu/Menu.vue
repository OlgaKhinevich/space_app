<template>
  <div class="menu">
      <input type="text" v-model="spaceTerm">
      <div class="button" @click="findResults">Search</div>
      <div class="history">
        <h4><i class="fas fa-history">  Search history</i></h4>
        <p v-for="(item,index) in history" :key="index" :data-id="index" class="history-item">
          {{item}}
          <i class="fa fa-trash" aria-hidden="true" @click="deleteHistoryItem"></i>
        </p>
      </div>
      
      <div class="button" @click="openFavourites">
       <i class="fas fa-star">  Favourites</i>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spaceTerm: [],
      history: []
    }  
  },
  mounted() {
    if (!localStorage["history"]) {
      localStorage["history"] = "[]";
    } else {
      this.history = JSON.parse(localStorage["history"]);
      console.log(this.history);
    }
  },
  methods: {
    async findResults() {
      try {
          if(!this.spaceTerm) throw new Error("Empty field!");
          const response = await fetch(`https://images-api.nasa.gov/search?q=${this.spaceTerm}`);
          if(!response.ok) throw new Error(response.statusText);
          const data = await response.json();
          const spaceData = data.collection.items;
          const newData = spaceData.filter((item) => item.data[0].media_type == "image")
          this.$emit('searchResults', newData);

          let mass = JSON.parse(localStorage["history"]);
          mass.push(this.spaceTerm);
          localStorage["history"] = JSON.stringify(mass);
      } catch(err) {
          console.log(err);
      }
    },
    openFavourites() {
      this.clicked = true;
      this.$emit('openFavorite');
    },
    deleteHistoryItem(e) {
      const deleteItem = e.target.closest(".history-item").dataset.id;
      this.history.splice(deleteItem, 1);
      localStorage["history"] = JSON.stringify(this.history);
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu {
    height: 100%;
    width: 20%;
    i {color:  #dddcc6;}
    input {
      border-radius: 3px;
      border: none;
      margin: 15px 20px;
    }
    .button {
      height: 30px;
      width: 120px;
      background-color: grey;
      margin-left: 20px;
      line-height: 30px;
      text-align: center;
      border-radius: 3px;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      cursor: pointer;
    }
    .history {
      height: 72%;
      h4 {
        font-family: 'Lato', sans-serif;
        color: #dddcc6;
        font-weight: 400;
        margin: 15px 20px;  
      }
      p {
        color: #c4c2aa;
        margin-left: 20px;
      }
    }
  }
</style>